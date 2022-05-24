import { createReducer, on } from '@ngrx/store';
import {
  getNextBatchOfCharactersSuccess,
  loadCharactersSuccess,
  setCurrentCharacter,
} from '../actions/home.actions';
import { HomeModuleState } from '../models/home-module.model';

const initialState: HomeModuleState = {
  characters: undefined,
  currentCharacter: undefined,
  totalRecordCount: undefined,
  recordsFetched: undefined,
};

export const homeModuleReducer = createReducer(
  initialState,
  on(loadCharactersSuccess, (state, { characters, totalRecords }) => ({
    ...state,
    characters,
    recordsFetched: characters.length,
    totalRecordCount: totalRecords,
  })),
  on(setCurrentCharacter, (state, { characterId }) => {
    const currentCharacter = state.characters?.find(
      (character) => character.id === characterId
    );
    return { ...state, currentCharacter };
  }),
  on(getNextBatchOfCharactersSuccess, (state, { characters }) => {
    const updatedCharacters =
      state.characters?.concat(characters) ?? characters;
    return {
      ...state,
      characters: updatedCharacters,
      recordsFetched: (state.recordsFetched as number) + characters.length,
    };
  })
);
