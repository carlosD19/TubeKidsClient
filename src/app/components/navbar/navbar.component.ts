import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public loggedIn : boolean;
	public user : any[];
	constructor(
		private auth   : AuthService,
		private token  : TokenService,
		private userService  : UserService,
		private router : Router
	) { }

	ngOnInit() {
		this.auth.authStatus.subscribe(value => this.loggedIn = value);
		this.me();
	}
/** get user info*/
	me() {
		this.userService.me().subscribe(
			(data: any[]) => this.user = data,
			error         => console.log(error)
		);
	}
/** close the session of the user and remove the token*/
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
