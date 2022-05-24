import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { setErrorMessage } from "../actions/marvel-apps-shared.actions";

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
}