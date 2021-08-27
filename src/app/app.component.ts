import {Component, HostBinding} from '@angular/core';
import {FormControl} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {IconService} from "./services/icon.service";
import {AuthGuard} from "./services/auth.guard";
import {SecurityService} from "./services/security.service";
import {UserService} from "./services/user.service";
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-template';
  user:any = {};

  darkClassName = 'darkMode';
  @HostBinding('class') className = '';
  toggleControl = new FormControl(true);
  theme = new BehaviorSubject("dark-theme");
  constructor(private iconService:IconService,private authGuard:AuthGuard,private securityService: SecurityService,private userService : UserService,private overlay: OverlayContainer) {
    this.iconService.registerIcons();
  }
  ngOnInit(): void {

    this.authGuard.listenForActivateUser().subscribe(u=>{
      this.user = u;
    });

    this.className =  this.darkClassName;
    this.toggleControl.valueChanges.subscribe((darkMode: any) => {
      this.className = darkMode ? this.darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(this.darkClassName);
        this.overlay.getContainerElement().setAttribute("prefers-color-scheme","darkMode");

      } else {
        this.overlay.getContainerElement().classList.remove(this.darkClassName);
        this.overlay.getContainerElement().setAttribute("prefers-color-scheme","lightMode");
      }
      this.theme.next(darkMode ? "dark-theme" : "light-theme");
    });
  }

  onLogout($event: MouseEvent) {
    this.securityService.logout().subscribe(()=>{
      this.securityService.removeToken();
    });
  }
}
