import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Config} from "./config";
import {ThemeService} from "./theme.service";
import {EventService} from "./event.service";

@NgModule({
  providers: [
    ThemeService,
		EventService,

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
