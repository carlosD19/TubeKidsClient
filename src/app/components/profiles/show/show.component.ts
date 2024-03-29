import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { Profile } from '../../../models/profile';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ProfilesShowComponent implements OnInit {

	private id     : string;
	public profile : Profile;
	private url    : string;
	
 	constructor(
 		private httpService : HttpClientService,
		private route       : ActivatedRoute,
  	) { 
 		this.profile = new Profile();
  	}

	ngOnInit() {
		this.takeProfileId();
 		this.getProfile();
	}
/** get an especific profile by id*/
	takeProfileId() {
		this.route.params.subscribe(params => {
	        if(params['id']!=null){
	        	this.id  = params['id'];
	        }
	    });
 		this.url = "profiles/" + this.id;
	}
/** send profile info */
	getProfile() {
		this.httpService.get(this.url).subscribe(
  			(data: Profile)  => this.handleResponse(data),
			error => this.handleError(error)
  		);
	}
/** handle profile info*/
  	handleResponse(data) {
		this.profile = data.data;
	}
/** handles profiles error*/
	handleError(error) {
		console.log(error);
	}
}
