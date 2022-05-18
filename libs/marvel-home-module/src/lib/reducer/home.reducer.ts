import { createReducer, on } from '@ngrx/store';
import { loadCharactersSuccess } from '../actions/home.actions';
import { HomeModuleState } from '../models/home-module.model';

const initialState: HomeModuleState = {
  characters: undefined
};

export const homeModuleReducer = createReducer(
  initialState,
  on(loadCharactersSuccess, (state, { characters }) => ({
    ...state,
    characters,
  }))
);
