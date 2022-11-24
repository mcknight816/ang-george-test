import {Component, HostBinding} from '@angular/core';
import {FormControl} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {IconService} from "./services/icon.service";
import {OverlayContainer} from "@angular/cdk/overlay";
import {ThemeService} from "./services/theme.service";
import {AuthService} from "./auth/auth.service";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-template';
    data:any | null = null;
    isDarkMode:boolean;
    @HostBinding('class') className = '';
    toggleControl = new FormControl(true);
    theme = new BehaviorSubject("dark-theme");
    constructor(private authService:AuthService,private iconService:IconService,private themeService:ThemeService, private overlay: OverlayContainer) {
        this.iconService.registerIcons();
        themeService.initTheme();
        this.isDarkMode = themeService.isDarkMode();
    }

    toggleDarkMode() {
        this.isDarkMode ? this.themeService.update('light-mode') : this.themeService.update('dark-mode');
    }
    isLoggedIn() {
        return this.authService.hasValidToken();
    }
    onLogout($event: MouseEvent) {
        this.authService.signOut();
    }
    login($event: MouseEvent){
        this.authService.signIn();
    }
}
