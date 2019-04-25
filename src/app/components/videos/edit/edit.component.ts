import { HttpClientService } from '../../../services/http-client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Video } from '../../../models/video';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class VideosEditComponent implements OnInit {

  	public video    : Video;
  	private url     : string;
  	private id      : string;
  	public error    : any[];
  	public formData : FormData;

  	constructor(
  		private httpService : HttpClientService,
		private router      : Router,
		private route       : ActivatedRoute,
  	) { 
    	this.video    = new Video();
    	this.url      = "videos";
    	this.error    = [];
    	this.formData = new FormData();
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
  			(data: Video)  => this.successResponse(data),
			error          => this.errorResponse(error)
  		);
	}

  	successResponse(data) {
		this.video = data.data;
	}

	errorResponse(error) {
		console.log(error);
	}

  	modify() {
	  	if (this.video.type == 'true') {
	      	let code = this.video.path.split('=')[1];
	      	let finalCode = code.split('&')[0];
	  		let video: Video = {
	  			id	     : this.video.id,
	  			user_id	 : this.video.user_id,
	  			name     : this.video.name,
	  			path     : finalCode,
	  			type     : this.video.type
	  		};
	  		this.video = video;
	  	}
	  	if (!this.formData.has('name')) {
	  		this.formData.append('path', this.video.path);
	 	    this.formData.append('name', this.video.name);
	 	    this.formData.append('type', this.video.type);
	 	    this.formData.append('id', this.video.id.toString());
	 	    this.formData.append('user_id', this.video.user_id.toString());
	  	}
	  	this.httpService.post(this.url, this.video.type=='true'?this.video:this.formData).subscribe(
	  		data  => this.handleResponse(data),
			error => this.handleError(error)
	  	);
  	}

  	handleResponse(data) {
		this.router.navigateByUrl('/videos');
	}

	handleError(error) {
		this.error = error.error.errors;
	}

	onFileChange(event){
		let video: FileList = event.target.files;
	  	if(video.length > 0) {
	  	    let file: File = video[0];
	  	    this.formData.append('video', file, file.name);
	 	    this.formData.append('name', this.video.name);
	 	    this.formData.append('type', this.video.type);
	 	    this.formData.append('id', this.video.id.toString());
	 	    this.formData.append('user_id', this.video.user_id.toString());
	  	}
	}
}
