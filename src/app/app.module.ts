import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { HttpClientService } from './services/http-client.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';

import { VideosIndexComponent } from './components/videos/index/index.component';
import { VideosCreateComponent } from './components/videos/create/create.component';
import { VideosEditComponent } from './components/videos/edit/edit.component';
import { VideosDeleteComponent } from './components/videos/delete/delete.component';
import { VideosShowComponent } from './components/videos/show/show.component';

import { ProfilesIndexComponent } from './components/profiles/index/index.component';
import { ProfilesCreateComponent } from './components/profiles/create/create.component';
import { ProfilesEditComponent } from './components/profiles/edit/edit.component';
import { ProfilesDeleteComponent } from './components/profiles/delete/delete.component';
import { ProfilesShowComponent } from './components/profiles/show/show.component';
import { FilterPipe } from './components/videos/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    VerifyEmailComponent,
    VerifyCodeComponent,
    ProfilesIndexComponent,
    ProfilesCreateComponent,
    ProfilesEditComponent,
    ProfilesDeleteComponent,
    ProfilesShowComponent,
    VideosIndexComponent,
    VideosCreateComponent,
    VideosEditComponent,
    VideosDeleteComponent,
    VideosShowComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, AuthService, TokenService, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
