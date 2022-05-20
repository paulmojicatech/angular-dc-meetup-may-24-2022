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

  export enum UrlType {
    DETAIL = 'detail',
    WIKI = 'wiki',
    COMIC_LINK = 'comicLink'
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
    urls: {
      type: UrlType;
      url: string;
    }[];
    comics: MarvelEntity;
    series: MarvelEntity;
    stories: MarvelEntity;
    events: MarvelEntity;
  }

  export interface MarvelEntity {
    available: number;
    items: {
        name: string;
      }[]
  }