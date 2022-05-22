/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, MarvelApiService } from '@pmt/marvel-apps-shared';
import { BehaviorSubject, filter, map, merge, Observable, tap } from 'rxjs';
import { getNextBatchOfCharacters, loadCharacters, setCurrentCharacter } from '../actions/home.actions';
import { HomeComponentViewModel } from '../models/home-module.model';
import { getCharacters } from '../selectors/home.selectors';
@Injectable()

export class HomeComponentStateService {

  readonly INITIAL_STATE: HomeComponentViewModel = {
    characters: undefined,
    scrollTop: 0
  }

  private _homeViewModelSub$ = new BehaviorSubject<HomeComponentViewModel>(this.INITIAL_STATE);
  viewModel$ = this._homeViewModelSub$.asObservable();

  constructor(private _store: Store<AppState>, private _marvelApiSvc: MarvelApiService){}

  getViewModel(): Observable<HomeComponentViewModel> {
    const apiReq = this._marvelApiSvc.getApiHash();
    this._store.dispatch(loadCharacters({apiReq}));
    const characters$ = this._store.select(getCharacters).pipe(
      filter(characters => !!characters),
      map(unprocessedCharacters => {
        const characters = unprocessedCharacters?.map(character => {
          const thumbnailUrl = `${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`;
          const updatedThumbnail = {...character.thumbnail, thumbnailUrl};
          return {...character, thumbnail: updatedThumbnail};
        }) ?? [];
        return {characters, scrollTop: this._homeViewModelSub$.getValue().scrollTop};
      }),
      tap(viewModel => {
        this._homeViewModelSub$.next(viewModel);
      })
    );
    return merge(this.viewModel$, characters$);
  }

  viewCharacterDetails(characterId: number): void {
    this._store.dispatch(setCurrentCharacter({characterId}));
  }

  handleScrollEvent(scrollEv: any): void {
    const currentState = this._homeViewModelSub$.getValue();
    const shouldFetch = this.shouldFetchMoreRecords(currentState, scrollEv);
    if(shouldFetch) {
      const apiReq = this._marvelApiSvc.getApiHash();
      this._store.dispatch(getNextBatchOfCharacters({apiReq}));
    }
    
  }

  private shouldFetchMoreRecords(currentState: HomeComponentViewModel, scrollEvent: any): boolean {
    const scrollTopFromEv = scrollEvent.target?.scrollingElement?.scrollTop;
    if (currentState.scrollTop + 100 < scrollTopFromEv) {
      this._homeViewModelSub$.next({
        ...currentState,
        scrollTop: scrollEvent.target.scrollingElement.scrollTop
      })
      return true;
    }
    return false;
  }
}
