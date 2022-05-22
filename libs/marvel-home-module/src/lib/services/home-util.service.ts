import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getIsCharactersLoaded, getRecordPullCount, homeModuleState } from '../selectors/home.selectors';
import { AppState } from '@pmt/marvel-apps-shared';
import { filter, map, Observable, take } from 'rxjs';

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
      take(1),
      filter(recordCount => !!recordCount)
    ) as Observable<number>;
  }

  getShouldFetchMoreCharacters(): Observable<boolean> {
    return this._store.select(homeModuleState).pipe(
      map(homeState => {
        return (homeState.totalRecordCount as number) > (homeState.recordsFetched as number);
      }),
      take(1)
    )
  }


}
