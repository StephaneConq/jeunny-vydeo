import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderBS = new BehaviorSubject(false);

  constructor() { }

  get loading() {
    return this.loaderBS.getValue();
  }

  toggleLoading() {
    this.loaderBS.next(this.loading);
  }
}
