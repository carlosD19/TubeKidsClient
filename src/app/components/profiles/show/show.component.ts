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
}
