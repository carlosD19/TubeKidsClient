import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VideosComponent } from './components/videos/videos.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { IndexComponent } from './components/index/index.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const routes: Routes = [
	{ path: '' , component: LoginComponent, canActivate: [BeforeLoginService]},
	{ path: 'register' , component: RegisterComponent, canActivate: [BeforeLoginService]},
	{ path: 'videos' , component: VideosComponent, canActivate: [AfterLoginService]},
	{ path: 'profiles' , component: ProfilesComponent, canActivate: [AfterLoginService]},
	{ path: 'index' , component: IndexComponent, canActivate: [AfterLoginService]},
	{ path: 'verify/:email' , component: VerifyEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

