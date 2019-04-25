import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { Video } from '../../../models/video';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class VideosIndexComponent implements OnInit {

  public videos     : Video[];
	private url       : string;
	private safeSrc   : SafeResourceUrl;
  public textFilter : string;
  constructor(
 		private httpService  : HttpClientService,
 		private sanitizer: DomSanitizer
  ) {
 		this.url        = "videos";
    this.textFilter = "";
  }

  ngOnInit() {
 		this.getVideoList();
 	}

  getVideoList() {
  	this.httpService.get(this.url).subscribe(
  		(data: Video[]) => this.videos = data,
  		error => console.log(error.error)
  	);
  }

  videoURL(url) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return this.safeSrc;
  }
}
