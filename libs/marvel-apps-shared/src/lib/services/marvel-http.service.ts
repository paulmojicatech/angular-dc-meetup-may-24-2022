import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Character, LoadCharacterResponse } from '../models/marvel-api.models';

@Injectable({
  providedIn: 'root',
})
export class MarvelHttpService {
  constructor(private _httpClient: HttpClient) {}

  loadCharacters(apiReq: string): Observable<{characters: Character[]; totalRecords: number}> {
    return this._httpClient
      .get<LoadCharacterResponse>(
        `https://gateway.marvel.com:443/v1/public/characters?limit=30&${apiReq}`
      )
      .pipe(
        map((httpResp) => {
          return {characters: httpResp.data.results, totalRecords: httpResp.data.total};
        }),
        catchError((err) => throwError(() => new Error(`${err}`)))
      );
  }
}
