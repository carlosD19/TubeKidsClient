import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public user = {
		email    : 'cmartinezs@est.utn.ac.cr',
		password : '12345678'
	};
	public error = null;

	constructor(
		private userService  : UserService,
		private tokenService : TokenService,
		private router       : Router,
		private auth         : AuthService
	) { }

	ngOnInit() {
	}

	login() {
		this.userService.login(this.user).subscribe(
			data  => this.handleResponse(data),
			error => this.handleError(error)
		);
	}

	handleResponse(data) {
		this.tokenService.handle(data.access_token, data.user.email_verified_at, data.user.active_code);
		this.auth.changeAuthStatus(true);
		if (!data.user.email_verified_at) {
			this.router.navigate(['/verify/email', this.user.email]);
		} else if (!data.active_code) {
			this.router.navigate(['/verify/code', this.user.email]);
		}
	}

	handleError(error) {
		this.error = error.error.error;
	}
}
