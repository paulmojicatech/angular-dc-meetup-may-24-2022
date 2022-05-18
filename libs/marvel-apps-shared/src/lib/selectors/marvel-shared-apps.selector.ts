import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "../models/shared-state.models";

export const getAppState = createFeatureSelector<AppState>('app');