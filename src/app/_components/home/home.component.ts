import { Component, OnInit } from '@angular/core';
import {RawgService} from "../../_services/rawg.service";
import {Game} from "../../_models/game";
import {Router} from "@angular/router";
import {MobileService} from "../../_services/mobile.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private rawgService: RawgService,
    private router: Router,
    private mobileService: MobileService
  ) { }

  filteredOptions: Game[];
  searchedValue = '';

  ngOnInit(): void {
  }

  get isMobile() {
    return this.mobileService.isMobile;
  }

  search(q: string) {
    this.searchedValue = q;
    q.length > 0 ?
      this.rawgService.searchGames(q).subscribe(res => this.filteredOptions = res['results']) :
      this.filteredOptions = [];
  }

  selectGame(gameId) {
    this.router.navigate([`/game/${gameId}`]);
  }

  getPlatforms(game: Game) {
    return game.platforms ? game.platforms.map(p => p.platform.name).join(', ') : '';
  }

}
