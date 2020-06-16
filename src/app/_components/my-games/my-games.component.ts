import { Component, OnInit } from '@angular/core';
import {FirestoreService} from "../../_services/firestore.service";
import {LoaderService} from "../../_services/loader.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent implements OnInit {

  constructor(
    private firestoreService: FirestoreService,
    private loaderService: LoaderService,
    private snackBar: MatSnackBar
  ) { }

  games;
  searchModel = '';

  ngOnInit(): void {
    this.loaderService.toggleLoading();
    this.firestoreService.getGames().subscribe(data => {
      this.games = data;
      this.loaderService.toggleLoading();
    })
  }

  delete(id) {
    this.firestoreService.delete(id).then(() => {
      this.snackBar.open('Jeu supprimé', 'Fermer', {
        duration: 3000
      });
    })
  }

  displayGame(gameName: string) {
    return this.searchModel.length === 0 || gameName.toLowerCase().includes(this.searchModel.toLowerCase());
  }

}
