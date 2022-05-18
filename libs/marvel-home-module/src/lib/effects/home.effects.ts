import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MarvelHttpService, setErrorMessage, toggleLoader } from "@pmt/marvel-apps-shared";
import { catchError, filter, map, switchMap } from "rxjs";
import { loadCharacters, loadCharactersSuccess } from "../actions/home.actions";
import { HomeUtilService } from "../services/home-util.service";
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
                catchError((err) => [setErrorMessage({errorMsg: `${err}`})])
            ))
        )
    );

    loadCharactersShowLoader$ = createEffect(
        () => this._actions$.pipe(
            ofType(loadCharacters),
            switchMap(() => this._homeUtilSvc.getIsCharactersLoaded()),
            filter(isLoaded => !isLoaded),
            map(() => toggleLoader({isLoading: true}))
        )
    );

    loadCharactersSuccessHideSpinner$ = createEffect(
        () => this._actions$.pipe(
            ofType(loadCharactersSuccess),
            map(() => toggleLoader({isLoading: false }))
        )
    );

}