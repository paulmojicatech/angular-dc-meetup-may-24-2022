export interface LoadCharacterResponse {
  attributionText: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  };
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

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
