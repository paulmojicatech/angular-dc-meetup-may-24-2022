import { createAction, props } from "@ngrx/store";
import { Character } from "../models/home-module.model";

export const loadCharacters = createAction(
    '[Home] Load Characters',
    props<{apiReq: string}>()
);

export const loadCharactersSuccess = createAction(
    '[Home] Load Characters Success',
    props<{characters: Character[]}>()
);

export const setHomeError = createAction(
    '[Home] Set Home Error',
    props<{errorMsg: string}>()
);

export const toggleLoader = createAction(
    '[Home] Toggle Loader Visisbility',
    props<{isLoading: boolean}>()
)
