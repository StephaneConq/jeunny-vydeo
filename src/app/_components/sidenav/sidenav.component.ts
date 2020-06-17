import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MobileService} from "../../_services/mobile.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private mobileService: MobileService
  ) {
  }

  @Output() clickLinkSidenavEvent = new EventEmitter();

  links = [
    {
      link: '',
      text: 'Rechercher',
      icon: 'search'
    },
    {
      link: 'my-games',
      text: 'Mes jeux',
      icon: 'list'
    }
  ]

  ngOnInit(): void {
  }

  clickedOnLink() {
    if (this.mobileService.isMobile) {
      this.clickLinkSidenavEvent.emit();
    }
  }

  get profilePic() {
    return this.authService.user ? this.authService.user.photoURL : '';
  }

  isOnThisPage(link) {
    return this.router.url.replace('/', '') === link;
  }

  logout() {
    this.authService.logout();
    this.snackBar.open('Déconnecté', 'Fermer', {
      duration: 3000
    });
  }
}
