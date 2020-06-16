import { Component, OnInit } from '@angular/core';
import {RawgService} from "../../_services/rawg.service";
import {Game} from "../../_models/game";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private rawgService: RawgService,
    private router: Router
  ) { }

  filteredOptions: Game[];

  ngOnInit(): void {
  }

  search(q: string) {
    this.rawgService.searchGames(q).subscribe(res => this.filteredOptions = res['results']);
  }

  selectGame(gameId) {
    this.router.navigate([`/game/${gameId}`]);
  }

}
