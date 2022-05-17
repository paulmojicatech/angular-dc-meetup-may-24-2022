import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MarvelApiService } from '@pmt/marvel-apps-shared';
import { BehaviorSubject, combineLatest, filter, map, merge, Observable, tap } from 'rxjs';
import { loadCharacters } from '../actions/home.actions';
import { AppState, HomeComponentViewModel } from '../models/home-module.model';
import { getCharacters, getIsCharactersLoaded } from '../selectors/home.selectors';

@Injectable()

export class HomeComponentStateService {

  readonly INITIAL_STATE: HomeComponentViewModel = {
    isLoading: false,
    characters: undefined
  }

  private _homeViewModelSub = new BehaviorSubject<HomeComponentViewModel>(this.INITIAL_STATE);
  viewModel$ = this._homeViewModelSub.asObservable();

  constructor(private _store: Store<AppState>, private _marvelApiSvc: MarvelApiService){}

  getViewModel(): Observable<HomeComponentViewModel> {
    const apiReq = this._marvelApiSvc.getApiHash();
    this._store.dispatch(loadCharacters({apiReq}));
    const isLoading$ = this._store.select(getIsCharactersLoaded);
    const characters$ = this._store.select(getCharacters).pipe(
      filter(characters => !!characters)
    );
    const reactiveStream$ = combineLatest([isLoading$, characters$]).pipe(
      map(([isLoading, characters]) => {
        return {isLoading, characters};
      }),
      tap(viewModel => {
        this._homeViewModelSub.next(viewModel);
      })
    );
    return merge(this.viewModel$, reactiveStream$);
  }
}