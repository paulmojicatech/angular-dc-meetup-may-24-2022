import { Character } from '@pmt/marvel-apps-shared';


export interface HomeModuleState {
    characters: Character[] | undefined;
    currentCharacter: Character | undefined;
    totalRecordCount: number | undefined;
    recordsFetched: number | undefined;
}
export interface HomeComponentViewModel {
  characters: Character[] | undefined;
  scrollTop: number;
}
