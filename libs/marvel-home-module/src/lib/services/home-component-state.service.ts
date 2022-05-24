/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store } from '@ngrx/store';
import { AppState, MarvelApiService } from '@pmt/marvel-apps-shared';
import { BehaviorSubject, filter, map, merge, Observable, tap } from 'rxjs';
import { getNextBatchOfCharacters, loadCharacters } from '../actions/home.actions';
import { HomeComponentViewModel } from '../models/home-module.model';
import { getCharacters } from '../selectors/home.selectors';

export abstract class HomeComponentStateService {

  readonly INITIAL_STATE: HomeComponentViewModel = {
    characters: undefined,
    scrollTop: 0
  }

  protected _homeViewModelSub$ = new BehaviorSubject<HomeComponentViewModel>(this.INITIAL_STATE);
  viewModel$ = this._homeViewModelSub$.asObservable();

  constructor(protected _store: Store<AppState>, protected _marvelApiSvc: MarvelApiService){}

  getViewModel(): Observable<HomeComponentViewModel> {
    const apiReq = this._marvelApiSvc.getApiHash();
    this._store.dispatch(loadCharacters({apiReq}));
    const characters$ = this._store.select(getCharacters).pipe(
      filter(characters => !!characters),
      map(characters => {
        return {characters, scrollTop: this._homeViewModelSub$.getValue().scrollTop};
      }),
      tap(viewModel => {
        this._homeViewModelSub$.next(viewModel);
      })
    );
    return merge(this.viewModel$, characters$);
  }

  handleScrollEvent(updatedScroll: number): void {
    const currentState = this._homeViewModelSub$.getValue();
    const shouldFetch = this.shouldFetchMoreRecords(currentState, updatedScroll);
    if(shouldFetch) {
      const apiReq = this._marvelApiSvc.getApiHash();
      this._store.dispatch(getNextBatchOfCharacters({apiReq}));
    }
    
  }

  private shouldFetchMoreRecords(currentState: HomeComponentViewModel, updatedScroll: number): boolean {
    if (currentState.scrollTop + 100 < updatedScroll) {
      this._homeViewModelSub$.next({
        ...currentState,
        scrollTop: updatedScroll
      })
      return true;
    }
    return false;
  }
}
