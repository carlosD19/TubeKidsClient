import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public loggedIn : boolean;

	constructor(
		private userService  : UserService,
		private auth         : AuthService,
		private token        : TokenService,
		private router       : Router
	) { }

	ngOnInit() {
		this.auth.authStatus.subscribe(value => this.loggedIn = value);
	}

	logout() {
		this.userService.logout().subscribe(
			data  => console.log(data),
			error => console.log(error)
		);
		this.token.removeToken();
		this.auth.changeAuthStatus(false);
		this.router.navigateByUrl('');
	}
}
