import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public user = {
		firstname        : null,
		lastname         : null,
		phone_number     : null,
		birthdate        : null,
		country          : null,
		email            : null,
		password         : null,
		confirm_password : null
	};
	public error = [];

	constructor(private http : HttpClient) { }

	ngOnInit() {
	}

	register() {
		return this.http.post('http://localhost/api/signup', this.user)
		.subscribe(
			data  => console.log(data),
			error => this.handleError(error)
		);
	}

	handleError(error) {
		this.error = error.error.errors;
	}

}
