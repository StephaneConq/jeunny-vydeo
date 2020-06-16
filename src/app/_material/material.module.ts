import { NgModule } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatListModule} from "@angular/material/list";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatRippleModule} from "@angular/material/core";

const modules = [
  MatToolbarModule,
  MatInputModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatListModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatRippleModule
];


@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
