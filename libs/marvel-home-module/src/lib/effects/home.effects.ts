import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { MarvelApiService } from "@pmt/marvel-apps-shared";
import { catchError, filter, map, switchMap } from "rxjs";
import { loadCharacters, loadCharactersSuccess, setHomeError, toggleLoader } from "../actions/home.actions";
import { HomeUtilService } from "../services/home-util.service";
import { MarvelHttpService } from "../services/marvel-http.service";
@Injectable()
export class HomeEffects {
    constructor(private _actions$: Actions, private _marvelHttpSvc: MarvelHttpService, private _homeUtilSvc: HomeUtilService){}

    loadCharacters$ = createEffect(
        () => this._actions$.pipe(
            ofType(loadCharacters),
            switchMap(action => this._homeUtilSvc.getIsCharactersLoaded().pipe(
                filter(isLoaded => !isLoaded),
                map(() => action)
            )),
            switchMap(action => this._marvelHttpSvc.loadCharacters(action.apiReq).pipe(
                map(characters => loadCharactersSuccess({characters})),
                catchError(err => [setHomeError({errorMsg: err})])
            ))
        )
    );

    loadCharacterShowLoader$ = createEffect(
        () => this._actions$.pipe(
            ofType(loadCharacters),
            switchMap(() => this._homeUtilSvc.getIsCharactersLoaded().pipe(
                filter(isLoaded => !isLoaded)
            )),
            map(() => toggleLoader({isLoading: true}))
        )
    );

    loadCharacterDismissLoaderOnSucccess$ = createEffect(
        () => this._actions$.pipe(
            ofType(loadCharactersSuccess),
            map(() => toggleLoader({isLoading: false}))
        )
    );

    loadCharacterDismissLoaderOnFail$ = createEffect(
        () => this._actions$.pipe(
            ofType(setHomeError),
            map(() => toggleLoader({isLoading: false}))
        )
    );
}