import { createReducer, on } from "@ngrx/store";
import { setErrorMessage, toggleLoader } from "../actions/marvel-apps-shared.actions";
import { AppState } from "../models/shared-state.models";

const initialState: AppState = {
    isLoading: false
};

export const appReducer = createReducer(
    initialState,
    on(
        toggleLoader,
        (state, { isLoading}) => ({...state, isLoading})
    ),
    on(
        setErrorMessage,
        (state) => ({...state, isLoading: false })
    )
);
