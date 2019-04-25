import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { Profile } from '../../../models/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class ProfilesCreateComponent implements OnInit {

	public profile : Profile;
	private url    : string;
	public error   : any[];
	constructor(
		private httpService : HttpClientService,
		private router      : Router,
	) { 
		this.profile = new Profile();
		this.url     = "profiles";
		this.error   = [];
	}

  	ngOnInit() {
  	}

  	create() {
  		this.httpService.post(this.url, this.profile).subscribe(
  			data  => this.handleResponse(data),
			error => this.handleError(error)
  		);
  	}

  	handleResponse(data) {
		this.router.navigateByUrl('/profiles');
	}

	handleError(error) {
		this.error = error.error.errors;
	}

}
