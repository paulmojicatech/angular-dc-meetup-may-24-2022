import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@pmt/marvel-home-module';
import { getIsLoading } from '@pmt/marvel-home-module';
import { Observable } from 'rxjs';
@Component({
  selector: 'pmt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  isLoading$!: Observable<boolean>;

  constructor(private _store: Store<AppState>){}

  ngOnInit(): void {
      this.isLoading$ = this._store.select(getIsLoading);
  }
}
