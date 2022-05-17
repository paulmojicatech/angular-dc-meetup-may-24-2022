import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { AppState } from '../models/home-module.model';
import { getIsCharactersLoaded } from '../selectors/home.selectors';

@Injectable({
  providedIn: 'root'
})
export class HomeUtilService {

  constructor(private _store: Store<AppState>) { }

  getIsCharactersLoaded(): Observable<boolean> {
    return this._store.select(getIsCharactersLoaded).pipe(
      take(1)
    );
  }


}