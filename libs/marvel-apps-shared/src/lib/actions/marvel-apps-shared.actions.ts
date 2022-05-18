import { createAction, props } from "@ngrx/store";

export const toggleLoader = createAction(
    '[Marvel Apps Shared] Toggle Loader',
    props<{isLoading: boolean}>()
);

export const setErrorMessage = createAction(
    '[Marvel Apps Shared] Set Error Message',
    props<{errorMsg: string}>()
);