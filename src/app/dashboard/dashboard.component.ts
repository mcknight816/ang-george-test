import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {IconService} from "../services/icon.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user:any = {};
  constructor(private userService : UserService,private iconService: IconService,private  dialog:  MatDialog,private router: Router,private fb: FormBuilder) {

  }
 createSpringBootApplication(){
   this.router.navigate(['/wizard']);
 }
  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((u)=>{
      this.user= u;
    });
    this.iconService.registerIcons();
  }
}
