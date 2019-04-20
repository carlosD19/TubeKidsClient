import { Injectable } from '@angular/core';
import { TokenService } from './../services/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	private url = 'http://localhost/api';

  constructor(
    private http : HttpClient,
    private tokenService : TokenService
    ) { }

  login(data) {
  	return this.http.post(`${this.url}/login`, data);
  }

  signup(data) {
  	return this.http.post(`${this.url}/signup`, data);
  }

  verifyEmail(email) {
  	return this.http.post(`${this.url}/verify/email`, email, this.header());
  }

  logout() {
    return this.http.post(`${this.url}/logout`, this.header());
  }

  private header() {
    return { headers: new HttpHeaders({'Authorization': `Bearer ${this.tokenService.getToken()}`})};
  }
}
