import { Component } from '@angular/core';
import {LoaderService} from "./_services/loader.service";
import {MobileService} from "./_services/mobile.service";
import {AuthService} from "./_services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private loaderService: LoaderService,
    private mobileService: MobileService,
    private authService: AuthService
  ) {
  }

  get loading() {
    return this.loaderService.loading;
  }

  get isMobile() {
    return this.mobileService.isMobile;
  }

  get user() {
    return this.authService.user;
  }
}
