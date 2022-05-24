import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, MarvelApiService } from '@pmt/marvel-apps-shared';
import { setCurrentCharacter } from '../../actions/home.actions';
import { HomeComponentStateService } from '../home-component-state.service';

@Injectable()
export class WebHomeComponentStateService extends HomeComponentStateService {
  constructor(
    protected override _store: Store<AppState>,
    protected override _marvelApiSvc: MarvelApiService
  ) {
    super(_store, _marvelApiSvc);
  }

  viewCharacterDetails(characterId: number): void {
    this._store.dispatch(setCurrentCharacter({ characterId, isMobile: false }));
  }
}
