import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  constructor(
    private http: HttpClient
  ) { }

  searchGames(search: string) {
    return this.http.get(`https://api.rawg.io/api/games?search=${search}`);
  }

  getGame(id: number) {
    return this.http.get(`https://api.rawg.io/api/games/${id}`);
  }

  getScreenshots(id: number) {
    return this.http.get(`https://api.rawg.io/api/games/${id}/screenshots`);
  }
}
