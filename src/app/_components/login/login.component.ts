import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {Router} from "@angular/router";
import {LoaderService} from "../../_services/loader.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  async login() {
    this.loaderService.toggleLoading();
    await this.authService.loginWithGoogle();
    await this.router.navigate(['']);
    this.loaderService.toggleLoading();
    this.snackBar.open('Connecté', 'Fermer', {
      duration: 3000
    });
  }

}
