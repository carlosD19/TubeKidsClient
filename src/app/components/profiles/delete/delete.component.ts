import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { Profile } from '../../../models/profile';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class ProfilesDeleteComponent implements OnInit {

  	private id     : string;
	public profile : Profile;
	private url    : string;
 	constructor(
 		private httpService : HttpClientService,
		private route       : ActivatedRoute,
		private router      : Router,
  	) { 
 		this.profile = new Profile();
  	}

	ngOnInit() {
		this.takeProfileId();
 		this.getProfile();
	}
/** get a profile by id*/
	takeProfileId() {
		this.route.params.subscribe(params => {
	        if(params['id']!=null){
	        	this.id  = params['id'];
	        }
	    });
 		this.url = "profiles/" + this.id;
	}
/** get a list of profiles*/
	getProfile() {
		this.httpService.get(this.url).subscribe(
  			(data: Profile)  => this.handleResponse(data),
			error => this.handleError(error)
  		);
	}
/** handle profile info */
  	handleResponse(data) {
		this.profile = data.data;
	}
/** handle errors of profiles*/
	handleError(error) {
		console.log(error);
	}
/** search the profile to delete*/
	delete() {
		this.httpService.delete(this.url).subscribe(
  			data  => this.successResponse(data),
			error => this.handleError(error)
  		);
	}
/** handle the route of profiles*/
	successResponse(data) {
		this.router.navigateByUrl('/profiles');
	}
}
