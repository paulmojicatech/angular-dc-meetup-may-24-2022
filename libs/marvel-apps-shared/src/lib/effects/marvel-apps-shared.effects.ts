import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs";
import { setErrorMessage, toggleLoader } from "../actions/marvel-apps-shared.actions";

@Injectable()
export class MarvelSharedAppsEffects {
    constructor(private _actions: Actions){}

    showError$ = createEffect(
        () => this._actions.pipe(
            ofType(setErrorMessage),
            tap(action => {
                alert(`Error: ${action.errorMsg}`);
            })
        ), { dispatch: false }
    );

    showErrorHideSpinner$ = createEffect(
        () => this._actions.pipe(
            ofType(setErrorMessage),
            map(() => toggleLoader({isLoading: false }))
        )
    );
}