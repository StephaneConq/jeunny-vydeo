import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Game} from "../../_models/game";
import {RawgService} from "../../_services/rawg.service";
import {LoaderService} from "../../_services/loader.service";
import {Screenshot} from "../../_models/screenshots";
import {FirestoreService} from "../../_services/firestore.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private rawgService: RawgService,
    private loaderService: LoaderService,
    private firestoreService: FirestoreService,
    private snackBar: MatSnackBar
  ) {
  }

  alreadyAdded = false;
  currentGame: Game;
  screenshots: Screenshot[] = [];
  displayBackToTop = false;

  ngOnInit(): void {
    window.onscroll = () => this.displayBackToTop = window.pageYOffset > 5;
    this.loaderService.toggleLoading();
    this.route.params.subscribe(params => {
      this.rawgService.getGame(params['id']).subscribe((game: Game) => {
        this.currentGame = game;
        this.loaderService.toggleLoading();
        this.firestoreService.searchByGameId(this.currentGame.id).subscribe(doc => {
          if (doc) {
            this.alreadyAdded = true;
          }
        });
        console.log('game', game);
      });
      this.rawgService.getScreenshots(params['id']).subscribe(res => {
        this.screenshots = res['results'];
      });
    });
  }

  scroll(el: HTMLElement) {
    if (el.tagName === 'HEADER') {
      document.getElementById('toolbar').scrollIntoView();
    } else {
      el.scrollIntoView();
    }
  }

  getLocalDateString(dateString) {
    return new Date(dateString).toLocaleDateString();
  }

  getGenres(game: Game) {
    return game.genres.map(g => g.name).join(', ')
  }

  getPlateformes(game: Game) {
    return game.platforms.map(p => p.platform.name).join(', ');
  }

  addGame() {
    this.firestoreService.insertGame({
      id: this.currentGame.id,
      name: this.currentGame.name,
      rating: this.currentGame.rating
    }).then(() => {
      this.snackBar.open("Jeu ajouté", "Fermer", {
        duration: 3000,
      });
    })
  }
}

