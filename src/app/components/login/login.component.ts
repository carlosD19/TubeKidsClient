import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public user = {
		email    : null,
		password : null
	};
	public error = null;

	constructor(private http : HttpClient) { }

	ngOnInit() {
	}

	login() {
		return this.http.post('http://localhost/api/login', this.user, this.headers())
		.subscribe(
			data  => console.log(data),
			error => this.handleError(error)
		);
	}

	handleError(error) {
		this.error = error.error.error;
	}

	private headers() {
   		return { headers: new HttpHeaders({'Authorization': 'Basic VHViZUtpZHM6YWRtaW5UdWJlS2lkcw=='})};
  	}

}
