import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Config} from "./config";
import {ModelService} from "./model";
import {UserService} from "./user.service";
@NgModule({
  providers: [
    ModelService,
    UserService
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule {
  public static forRoot(environment: any): Config{
    return new Config(environment);
  }
}
