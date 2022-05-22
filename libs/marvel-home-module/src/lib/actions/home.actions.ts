import { createAction, props } from "@ngrx/store";
import { Character } from "@pmt/marvel-apps-shared";

export const loadCharacters = createAction(
    '[Home] Load Characters',
    props<{apiReq: string}>()
);

export const loadCharactersSuccess = createAction(
    '[Home] Load Characters Success',
    props<{characters: Character[]; totalRecords: number;}>()
);

export const setCurrentCharacter = createAction(
    '[Home] Set Current Character',
    props<{characterId: number}>()
);

export const getNextBatchOfCharacters = createAction(
    '[Home] Get Next Batch Of Characters',
    props<{apiReq: string}>()
);

export const getNextBatchOfCharactersSuccess = createAction(
    '[Home] Get Next Batch Of Characters Success',
    props<{characters: Character[]}>()
);
