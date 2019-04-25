import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { Video } from '../../../models/video';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class VideosCreateComponent implements OnInit {

  public video    : Video;
  private url     : string;
  public error    : any[];
  public formData : FormData;

  constructor(
  	private httpService : HttpClientService,
		private router      : Router,
  ) { 
    this.video    = new Video();
    this.url      = "videos";
    this.error    = [];
    this.formData = new FormData();
  }

  ngOnInit() {
  }

  create() {
  	if (this.video.type == 'true') {
      let code = this.video.path.split('=')[1];
      let finalCode = code.split('&')[0];
  		let video: Video = {
  			name : this.video.name,
  			path : finalCode,
  			type : this.video.type
  		};
  		this.video = video;
  	}
  	this.httpService.post(this.url, this.video.type == 'true'?this.video:this.formData).subscribe(
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
  	}
  }
}
