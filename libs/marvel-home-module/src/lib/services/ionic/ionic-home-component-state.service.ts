import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Character, MarvelApiService } from '@pmt/marvel-apps-shared';
import { Observable } from 'rxjs';
import { setCurrentCharacter } from '../../actions/home.actions';
import { getCurrentCharacter } from '../../selectors/home.selectors';
import { HomeComponentStateService } from '../home-component-state.service';

@Injectable()
export class IonicHomeComponentStateService extends HomeComponentStateService {

  constructor(protected override _store: Store<AppState>, protected override _marvelApiSvc: MarvelApiService) {
    super(_store, _marvelApiSvc);
   }

   viewCharacterDetails(characterId: number): void {
    this._store.dispatch(setCurrentCharacter({characterId, isMobile: true}));
  }

  getCurrentCharacter(): Observable<Character> {
    return this._store.select(getCurrentCharacter) as Observable<Character>;
  }
}
