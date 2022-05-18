import { createReducer, on } from '@ngrx/store';
import { loadCharactersSuccess, setCurrentCharacter } from '../actions/home.actions';
import { HomeModuleState } from '../models/home-module.model';

const initialState: HomeModuleState = {
  characters: undefined,
  currentCharacter: undefined
};

export const homeModuleReducer = createReducer(
  initialState,
  on(loadCharactersSuccess, (state, { characters }) => ({
    ...state,
    characters,
  })),
  on(
    setCurrentCharacter,
    (state, {characterId}) => {
      const currentCharacter = state.characters?.find(character => character.id === characterId);
      return {...state, currentCharacter};
    }
  )
);
