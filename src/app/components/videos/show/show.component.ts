import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClientService } from '../../../services/http-client.service';
import { Video } from '../../../models/video';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class VideosShowComponent implements OnInit {

  	private id     : string;
	public video   : Video;
	private url    : string;
	private safeSrc : SafeResourceUrl;

 	constructor(
 		private httpService : HttpClientService,
		private route       : ActivatedRoute,
 		private sanitizer: DomSanitizer
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

	videoURL(url) {
    	this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    	return this.safeSrc;
  	}
}
