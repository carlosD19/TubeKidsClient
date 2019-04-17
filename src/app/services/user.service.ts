import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	private url = 'http://localhost/api';

  constructor(private http : HttpClient) { }

  login(data) {
  	return this.http.post(`${this.url}/login`, data);
  }

  signup(data) {
  	return this.http.post(`${this.url}/signup`, data);
  }

  verifyEmail(email) {
  	return this.http.post(`${this.url}/verify/email`, email);
  }
}
