import { createReducer, on } from '@ngrx/store';
import { loadCharactersSuccess, toggleLoader } from '../actions/home.actions';
import { HomeModuleState } from '../models/home-module.model';

const initialState: HomeModuleState = {
  characters: undefined,
  isLoading: false,
};

export const homeModuleReducer = createReducer(
  initialState,
  on(loadCharactersSuccess, (state, { characters }) => ({
    ...state,
    characters,
  })),
  on(toggleLoader, (state, { isLoading }) => ({ ...state, isLoading }))
);
