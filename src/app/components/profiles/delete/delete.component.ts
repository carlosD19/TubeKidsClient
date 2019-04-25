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

	delete() {
		this.httpService.delete(this.url).subscribe(
  			data  => this.successResponse(data),
			error => this.handleError(error)
  		);
	}

	successResponse(data) {
		this.router.navigateByUrl('/profiles');
	}
}
