import { createAction, props } from "@ngrx/store";
import { Character } from "@pmt/marvel-apps-shared";

export const loadCharacters = createAction(
    '[Home] Load Characters',
    props<{apiReq: string}>()
);

export const loadCharactersSuccess = createAction(
    '[Home] Load Characters Success',
    props<{characters: Character[]}>()
);

export const setCurrentCharacter = createAction(
    '[] Set Current Character',
    props<{characterId: number}>()
);
