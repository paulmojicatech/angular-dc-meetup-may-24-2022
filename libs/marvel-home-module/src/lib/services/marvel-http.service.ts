import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Character, LoadCharacterResponse } from '../models/home-module.model';

@Injectable({
  providedIn: 'root',
})
export class MarvelHttpService {
  constructor(private _httpClient: HttpClient) {}

  loadCharacters(apiReq: string): Observable<Character[]> {
    return this._httpClient
      .get<LoadCharacterResponse>(
        `https://gateway.marvel.com:443/v1/public/characters?${apiReq}`
      )
      .pipe(
        map((httpResp) => {
          return httpResp.data.results;
        }),
        catchError((err) => throwError(() => new Error(`${err}`)))
      );
  }
}
