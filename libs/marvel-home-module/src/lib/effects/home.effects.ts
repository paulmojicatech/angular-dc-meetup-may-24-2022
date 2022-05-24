import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MarvelHttpService, setErrorMessage, toggleLoader } from "@pmt/marvel-apps-shared";
import { catchError, filter, map, switchMap, tap } from "rxjs";
import { getNextBatchOfCharacters, getNextBatchOfCharactersSuccess, loadCharacters, loadCharactersSuccess, setCurrentCharacter } from "../actions/home.actions";
import { HomeUtilService } from "../services/home-util.service";
import {Router} from '@angular/router';
@Injectable()
export class HomeEffects {
  constructor(
    private _actions$: Actions,
    private _marvelHttpSvc: MarvelHttpService,
    private _homeUtilSvc: HomeUtilService,
    private _router: Router
  ) {}

  loadCharacters$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadCharacters),
      switchMap((action) =>
        this._homeUtilSvc.getIsCharactersLoaded().pipe(
          filter((isLoaded) => !isLoaded),
          map(() => action)
        )
      ),
      switchMap((action) =>
        this._marvelHttpSvc.loadCharacters(action.apiReq).pipe(
          map((newStream) =>
            loadCharactersSuccess({
              characters: newStream.characters,
              totalRecords: newStream.totalRecords,
            })
          ),
          catchError((err) => [setErrorMessage({ errorMsg: `${err}` })])
        )
      )
    )
  );

  loadCharactersShowLoader$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadCharacters),
      switchMap(() => this._homeUtilSvc.getIsCharactersLoaded()),
      filter((isLoaded) => !isLoaded),
      map(() => toggleLoader({ isLoading: true }))
    )
  );

  loadCharactersSuccessHideSpinner$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadCharactersSuccess),
      map(() => toggleLoader({ isLoading: false }))
    )
  );

  setCurrentCharacterRoute$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(setCurrentCharacter),
        filter((action) => !action.isMobile),
        tap(() => this._router.navigate(['character-detail']))
      ),
    { dispatch: false }
  );

  getNextBatchOfCharacters$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getNextBatchOfCharacters),
      switchMap((action) =>
        this._homeUtilSvc.getShouldFetchMoreCharacters().pipe(
          filter((shouldFetch) => shouldFetch),
          map(() => action)
        )
      ),
      switchMap((action) =>
        this._homeUtilSvc
          .getRecordCountAlreadyFetched()
          .pipe(map((recordsFetched) => ({ action, recordsFetched })))
      ),
      switchMap((newStream) =>
        this._marvelHttpSvc
          .getNextBatchOfCharacters(
            newStream.action.apiReq,
            newStream.recordsFetched
          )
          .pipe(
            map((resp) =>
              getNextBatchOfCharactersSuccess({ characters: resp })
            ),
            catchError((err) => [setErrorMessage({ errorMsg: `${err}` })])
          )
      )
    )
  );
}