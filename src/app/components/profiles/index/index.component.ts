import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class ProfilesIndexComponent implements OnInit {

	public profiles = [];
	private url = "profiles";
  	constructor(
  		private httpService  : HttpClientService
  	) { }

  	ngOnInit() {
  		this.httpService.get(this.url).subscribe(
  			data  => console.log(data),
			error => console.log(error)
  		);
  	}

}
