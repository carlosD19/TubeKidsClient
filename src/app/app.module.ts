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
import { VideosComponent } from './components/videos/videos.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { IndexComponent } from './components/index/index.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    VideosComponent,
    ProfilesComponent,
    IndexComponent,
    VerifyEmailComponent,
    VerifyCodeComponent
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
