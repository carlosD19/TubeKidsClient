import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { Profile } from '../../../models/profile';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class ProfilesIndexComponent implements OnInit {

	  public profiles : Profile[];
	  private url : string;
  	constructor(private httpService  : HttpClientService) {
  		this.url = "profiles";
  	}

  	ngOnInit() {
  		this.getProfileList();
  	}
/** get profiles list*/
  	getProfileList() {
  		this.httpService.get(this.url).subscribe(
  			(data: Profile[]) => this.profiles = data,
  			error => console.log(error.error)
  		);
  	}

}
