import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public user = {
		firstname        : 'Carlos',
		lastname         : 'Martinez',
		phone_number     : '86478778',
		birthdate        : '1999-10-10',
		country          : 'Costa Rica',
		email            : 'cmartinezs@est.utn.ac.cr',
		password         : '12345678',
		confirm_password : '12345678'
	};
	public error = [];

	constructor(
		private userService  : UserService,
		private tokenService : TokenService,
		private auth         : AuthService,
		private router       : Router
	) { }

	ngOnInit() {
	}

	register() {
		this.userService.signup(this.user).subscribe(
			data  => this.handleResponse(data),
			error => this.handleError(error)
		);
	}

	handleResponse(data) {
		this.tokenService.handle(data.access_token, data.user.email_verified_at, data.user.active_code);
		this.auth.changeAuthStatus(true);
		this.router.navigate(['/verify/email', this.user.email]);
	}

	handleError(error) {
		this.error = error.error.errors;
	}

}
