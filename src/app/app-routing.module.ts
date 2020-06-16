import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./_components/home/home.component";
import {LoginComponent} from "./_components/login/login.component";
import {AuthGuard} from "./_guards/auth.guard";
import {GameComponent} from "./_components/game/game.component";
import {MyGamesComponent} from "./_components/my-games/my-games.component";


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'game/:id', component: GameComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'my-games', component: MyGamesComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
