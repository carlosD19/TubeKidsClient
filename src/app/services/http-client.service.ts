import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private baseUrl = 'http://localhost/api';

  constructor(
    private tokenService : TokenService,
    private http : HttpClient
    ) { }

  get(url) {
  	return this.http.get(`${this.baseUrl}/${url}`, this.header());
  }

  post(url, data) {
  	return this.http.post(`${this.baseUrl}/${url}`, data, this.header());
  }

  put(url, data) {
  	return this.http.put(`${this.baseUrl}/${url}`, data, this.header());
  }

  delete(url) {
  	return this.http.delete(`${this.baseUrl}/${url}`, this.header());
  }

  private header() {
    return { headers: new HttpHeaders({'Authorization': `Bearer ${this.tokenService.getToken()}`})};
  }
}
