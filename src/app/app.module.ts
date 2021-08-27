import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CallbackComponent} from "./callback/callback.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {MaterialModule} from "./material-module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {ServiceModule} from "./services/service.module";
import {environment} from "../environments/environment";
import {Config} from "./services/config";
import {AuthHeaderInterceptor} from "./services/auth-header.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ServiceWorkerModule} from "@angular/service-worker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {MatCarouselModule} from "./carousel/carousel.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CallbackComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    ServiceModule,
    CommonModule ,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCarouselModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    {provide: Config, useValue: ServiceModule.forRoot(environment)},
    {provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
