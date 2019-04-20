import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent implements OnInit {

	public user = {
		email : null,
		code  : null
	};
	public error = null;

	constructor(
		private userService  : UserService,
		private route        : ActivatedRoute,
		private tokenService : TokenService,
		private router       : Router,
		private auth         : AuthService

	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
	        if(params['email']!=null){
	          this.user.email = params['email'];
	        }
	    });
	}

	confirmCode() {
		this.userService.verifyCode(this.user).subscribe(
			data  => this.handleResponse(data),
			error => this.handleError(error)
		);
	}

	sendCode() {
		this.userService.sendCode(this.user).subscribe(
			data  => console.log(data),
			error => console.log(error)
		);
	}

	handleResponse(data) {
		this.tokenService.setActiveCode(true);
		this.router.navigateByUrl('/index');
	}

	handleError(error) {
		this.error = error.error.error;
		console.log(this.error);
	}

}
