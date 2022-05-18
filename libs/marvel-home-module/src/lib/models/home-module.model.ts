import { Character } from '@pmt/marvel-apps-shared';


export interface HomeModuleState {
    characters: Character[] | undefined;
    isLoading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {}

export interface HomeComponentViewModel {
  isLoading: boolean;
  characters: Character[] | undefined;
}
