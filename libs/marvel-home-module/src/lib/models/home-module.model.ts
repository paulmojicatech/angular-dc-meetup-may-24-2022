import { Character } from '@pmt/marvel-apps-shared';


export interface HomeModuleState {
    characters: Character[] | undefined;
}
export interface HomeComponentViewModel {
  isLoading: boolean;
  characters: Character[] | undefined;
}
