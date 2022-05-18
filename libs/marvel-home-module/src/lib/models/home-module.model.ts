import { Character } from '@pmt/marvel-apps-shared';


export interface HomeModuleState {
    characters: Character[] | undefined;
    currentCharacter: Character | undefined;
}
export interface HomeComponentViewModel {
  characters: Character[] | undefined;

}
