import { Injectable } from '@angular/core';
import * as Md5 from 'ts-md5';
import { PRIVATE_MARVEL_KEY, PUBLIC_MARVEL_KEY } from '../keys';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

   getApiHash(): { ts: number, hash: string } {
     const ts = new Date().getDate();
     const hash = Md5.Md5.hashStr(`${ts}${PRIVATE_MARVEL_KEY}${PUBLIC_MARVEL_KEY}`);
     return { ts, hash };
   }
}
