import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

	private iss = {
		login  : 'http://localhost/api/login',
		signup : 'http://localhost/api/signup'
	};
	constructor() { }

	handle(token, email_verified_at) {
		this.setToken(token);
		this.setEmailVerified(email_verified_at);
	}

	setEmailVerified(email_verified_at) {
		localStorage.setItem('email_verified_at', email_verified_at);
	}

	setToken(token) {
		localStorage.setItem('token', token);
	}

	getEmailVerified() {
		return localStorage.getItem('email_verified_at');
	}

	getToken() {
		return localStorage.getItem('token');
	}

	removeToken() {
		localStorage.removeItem('token');
		localStorage.removeItem('email_verified_at');
	}

	isValidToken() {
		const token = this.getToken();
		const emailVerified = this.getEmailVerified();
		if (token && emailVerified) {
			const payload = this.payload(token);
			if (payload) {
				return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
			}
		}
		return false;
	}

	payload(token) {
		const payload = token.split('.')[1];
		return this.decode(payload);
	}

	decode(payload) {
		return JSON.parse(atob(payload));
	}

	loggedIn() {
		return this.isValidToken();
	}
}
