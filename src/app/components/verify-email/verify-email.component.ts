import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

	public user = {
		email : null
	};

	constructor(
		private userService  : UserService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
	        if(params['email']!=null){
	          this.user.email = params['email'];
	        }
	    });
	    this.sendEmail();
	}

	sendEmail() {
		this.userService.verifyEmail(this.user).subscribe(
			data  => console.log(data),
			error => console.log(error)
		);
	}

	resend() {

	}
}
