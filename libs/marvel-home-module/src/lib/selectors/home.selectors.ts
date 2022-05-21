import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeModuleState } from "../models/home-module.model";

export const homeModuleState = createFeatureSelector<HomeModuleState>('home');

export const getIsCharactersLoaded = createSelector(
    homeModuleState,
    state => !!state.characters
);

export const getCharacters = createSelector(
    homeModuleState,
    state => state.characters
);

export const getCurrentCharacter = createSelector(
    homeModuleState,
    state => state.currentCharacter
);

export const getRecordPullCount = createSelector(
    homeModuleState,
    state => state.recordsFetched
);