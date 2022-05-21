import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getAppState } from '@pmt/marvel-apps-shared';
import { filter, map, Observable, take } from 'rxjs';
import { getIsCharactersLoaded, getRecordPullCount, homeModuleState } from '../selectors/home.selectors';

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

  getRecordCountAlreadyFetched(): Observable<number> {
    return this._store.select(getRecordPullCount).pipe(
      filter(recordCount => !!recordCount)
    ) as Observable<number>;
  }

  getShouldFetchMoreCharacters(): Observable<boolean> {
    return this._store.select(homeModuleState).pipe(
      map(homeState => {
        return (homeState.totalRecordCount as number) > (homeState.recordsFetched as number);
      })
    )
  }


}
