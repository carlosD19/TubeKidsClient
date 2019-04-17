import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private url = 'http://localhost/api';

  constructor(private http : HttpClient) { }

  get(url, token) {
  	return this.http.get(`${this.url}/${url}`, this.header(token));
  }

  post(url, token, data) {
  	return this.http.post(`${this.url}/${url}`, data, this.header(token));
  }

  put(url, token, data) {
  	return this.http.put(`${this.url}/${url}`, data, this.header(token));
  }

  delete(url, token) {
  	return this.http.delete(`${this.url}/${url}`, this.header(token));
  }

  private header(token) {
    return { headers: new HttpHeaders({'Authorization': `Bearer ${token}`})};
  }
}
