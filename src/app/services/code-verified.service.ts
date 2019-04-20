import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from 
'@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CodeVerifiedService implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
    Observable<boolean> | Promise<boolean> {
		if (this.token.codeVerified()) {
			return true;
		}
		else {
			this.router.navigateByUrl('/index');
		}
	}
  	constructor(
  		private token  : TokenService,
  		private router : Router
  	) { }
}
