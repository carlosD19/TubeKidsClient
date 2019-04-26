import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { Profile } from '../../../models/profile';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProfilesEditComponent implements OnInit {

  	private id     : string;
	public profile : Profile;
	private url    : string;
	public error   : any[];
 	constructor(
 		private httpService : HttpClientService,
		private route       : ActivatedRoute,
		private router      : Router,
  	) { 
 		this.profile = new Profile();
 		this.error   = [];
  	}

	ngOnInit() {
		this.takeProfileId();
 		this.getProfile();
	}

	takeProfileId() {
		this.route.params.subscribe(params => {
	        if(params['id']!=null){
	        	this.id  = params['id'];
	        }
	    });
 		this.url = "profiles/" + this.id;
	}
	
	getProfile() {
		this.httpService.get(this.url).subscribe(
  			(data: Profile)  => this.handleResponse(data),
			error => this.handleError(error)
  		);
	}

  	handleResponse(data) {
		this.profile = data.data;
	}

	handleError(error) {
		console.log(error);
	}

	modify() {
		this.httpService.put(this.url, this.profile).subscribe(
  			data  => this.successResponse(data),
			error => this.errorResponse(error)
  		);
	}

	successResponse(data) {
		this.router.navigateByUrl('/profiles');
	}

	errorResponse(error) {
		this.error = error.error.errors;
	}
}
