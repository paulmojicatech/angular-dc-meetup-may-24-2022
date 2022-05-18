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
      thumbnailUrl: string;
    };
    isFavorite?: boolean;
  }