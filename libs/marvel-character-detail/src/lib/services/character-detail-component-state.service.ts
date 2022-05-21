import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@pmt/marvel-apps-shared';
import { getCurrentCharacter } from '@pmt/marvel-home-module';
import { BehaviorSubject, map, merge, Observable, tap } from 'rxjs';
import { CharacterDetailComponentViewModel } from '../models/character-detail.model';

@Injectable()
export class CharacterDetailComponentStateService {

  readonly INITIAL_STATE: CharacterDetailComponentViewModel = {
    character: undefined
  };

  private _viewModelSub$ = new BehaviorSubject<CharacterDetailComponentViewModel>(this.INITIAL_STATE);
  viewModel$ = this._viewModelSub$.asObservable();

  constructor(private _store: Store<AppState>) { }

  getViewModel(): Observable<CharacterDetailComponentViewModel> {
    const character$ = this._store.select(getCurrentCharacter).pipe(
      map(character => ({character})),
      tap(viewModel => this._viewModelSub$.next(viewModel))
    );

    return merge(this.viewModel$, character$);

  }
}
