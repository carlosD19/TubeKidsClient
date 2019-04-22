import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { EmailVerifiedService } from './services/email-verified.service';
import { CodeVerifiedService } from './services/code-verified.service';


import { VideosIndexComponent } from './components/videos/index/index.component';
import { VideosCreateComponent } from './components/videos/create/create.component';
import { VideosShowComponent } from './components/videos/show/show.component';
import { VideosEditComponent } from './components/videos/edit/edit.component';
import { VideosDeleteComponent } from './components/videos/delete/delete.component';

import { ProfilesIndexComponent } from './components/profiles/index/index.component';
import { ProfilesCreateComponent } from './components/profiles/create/create.component';
import { ProfilesShowComponent } from './components/profiles/show/show.component';
import { ProfilesEditComponent } from './components/profiles/edit/edit.component';
import { ProfilesDeleteComponent } from './components/profiles/delete/delete.component';

const routes: Routes = [
	{ path: '' , component: LoginComponent, canActivate: [BeforeLoginService]},
	{ path: 'register' , component: RegisterComponent, canActivate: [BeforeLoginService]},

	{ path: 'videos' , component: VideosIndexComponent, canActivate: [AfterLoginService]},
	{ path: 'videos/new' , component: VideosCreateComponent, canActivate: [AfterLoginService]},
	{ path: 'videos/:id/show' , component: VideosShowComponent, canActivate: [AfterLoginService]},
	{ path: 'videos/:id/edit' , component: VideosEditComponent, canActivate: [AfterLoginService]},
	{ path: 'videos/:id/delete' , component: VideosDeleteComponent, canActivate: [AfterLoginService]},

	{ path: 'profiles' , component: ProfilesIndexComponent, canActivate: [AfterLoginService]},
	{ path: 'profiles/new' , component: ProfilesCreateComponent, canActivate: [AfterLoginService]},
	{ path: 'profiles/:id/show' , component: ProfilesShowComponent, canActivate: [AfterLoginService]},
	{ path: 'profiles/:id/edit' , component: ProfilesEditComponent, canActivate: [AfterLoginService]},
	{ path: 'profiles/:id/delete' , component: ProfilesDeleteComponent, canActivate: [AfterLoginService]},
	
	{ path: 'index' , component: IndexComponent, canActivate: [AfterLoginService]},
	{ path: 'verify/email/:email' , component: VerifyEmailComponent, canActivate: [EmailVerifiedService]},
	{ path: 'verify/code/:email' , component: VerifyCodeComponent, canActivate: [CodeVerifiedService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

