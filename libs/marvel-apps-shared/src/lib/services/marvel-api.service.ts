import { Injectable } from '@angular/core';
import * as Md5 from 'ts-md5';
import { PRIVATE_MARVEL_KEY, PUBLIC_MARVEL_KEY } from '../keys';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

   getApiHash(): string {
     const ts = `${new Date().getTime()}`;
     const hash = Md5.Md5.hashStr(`${ts}${PRIVATE_MARVEL_KEY}${PUBLIC_MARVEL_KEY}`);
     return `apikey=${PUBLIC_MARVEL_KEY}&ts=${ts}&hash=${hash}`;
   }
}
