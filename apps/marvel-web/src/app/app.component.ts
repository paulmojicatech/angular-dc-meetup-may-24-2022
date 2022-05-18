import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getAppState } from '@pmt/marvel-apps-shared';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'pmt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading$!: Observable<boolean>;

  constructor(private _store: Store<AppState>){}

  ngOnInit(): void {
      this.isLoading$ = this._store.select(getAppState).pipe(
        map(appState => appState.isLoading)
      );
  }
}
