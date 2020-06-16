import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAnalyticsModule} from "@angular/fire/analytics";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import {MaterialModule} from "./_material/material.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GameComponent } from './_components/game/game.component';
import { MyGamesComponent } from './_components/my-games/my-games.component';
import { SidenavComponent } from './_components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GameComponent,
    MyGamesComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    FlexLayoutModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
