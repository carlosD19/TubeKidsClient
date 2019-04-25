import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { Video } from '../../../models/video';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class VideosDeleteComponent implements OnInit {

  	private id     : string;
	public video   : Video;
	private url    : string;
 	constructor(
 		private httpService : HttpClientService,
		private route       : ActivatedRoute,
		private router      : Router,
  	) { 
 		this.video = new Video();
  	}

	ngOnInit() {
		this.takeVideoId();
 		this.getVideo();
	}

	takeVideoId() {
		this.route.params.subscribe(params => {
	        if(params['id']!=null){
	        	this.id  = params['id'];
	        }
	    });
 		this.url = "videos/" + this.id;
	}

	getVideo() {
		this.httpService.get(this.url).subscribe(
  			(data: Video)  => this.handleResponse(data),
			error => this.handleError(error)
  		);
	}

  	handleResponse(data) {
		this.video = data.data;
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
		this.router.navigateByUrl('/videos');
	}
}
