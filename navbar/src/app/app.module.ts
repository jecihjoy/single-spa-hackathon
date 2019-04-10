import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AppSettingsService } from './services/app-settings.service';
import { AuthenticationService } from './services/authentication.service';
import { LocalStorageService } from './services/local-storage.service';
import { SessionService } from './services/session.service';
import { SessionStorageService } from './services/session-storage.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppSettingsService, AuthenticationService, LocalStorageService,
              SessionService, SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
