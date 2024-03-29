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

	handle(token, email_verified_at, active_code) {
		this.setToken(token);
		this.setActiveCode(active_code);
		this.setEmailVerified(email_verified_at);
	}

	setActiveCode(active_code) {
		localStorage.setItem('active_code', active_code);
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

	getActiveCode() {
		return localStorage.getItem('active_code');
	}

	getToken() {
		return localStorage.getItem('token');
	}

	removeToken() {
		localStorage.removeItem('token');
		localStorage.removeItem('email_verified_at');
		localStorage.removeItem('active_code');
	}

	isValidToken() {
		const token         = this.getToken();
		const emailVerified = this.getEmailVerified() === 'null' ? false : true;
		const activeCode    = this.getActiveCode() == 'true' ? true : false;
		if ((emailVerified) && token && activeCode) {
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

	emailVerified() {
		const token         = this.getToken();
		const emailVerified = this.getEmailVerified() === 'null' ? false : true;
		if (!(emailVerified) && token) {
			const payload = this.payload(token);
			if (payload) {
				return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
			}
		}
		return false;
	}

	codeVerified() {
		const token         = this.getToken();
		const activeCode    = this.getActiveCode() == 'true' ? true : false;
		if (!(activeCode) && token) {
			const payload = this.payload(token);
			if (payload) {
				return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
			}
		}
		return false;
	}
}
