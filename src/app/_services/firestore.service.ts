import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {flatMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {
  }

  getGames() {
    const collectionRef = this.firestore.collection('games', ref => ref.orderBy('name'));
    return collectionRef.snapshotChanges();
  }

  insertGame(data: { id: number, name: string, rating: number }) {
    return this.firestore
      .collection("games")
      .add(data);
  }

  delete(id) {
    return this.firestore
      .collection("games")
      .doc(id)
      .delete();
  }

  searchByGameId(gameId) {
    return this.firestore.collection('games', ref => ref.where('id', '==', gameId).limit(1))
      .valueChanges()
      .pipe(flatMap(game => game));
  }
}
