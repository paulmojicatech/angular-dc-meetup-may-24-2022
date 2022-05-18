import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@pmt/marvel-apps-shared';
import { Observable } from 'rxjs';
@Component({
  selector: 'pmt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  isLoading$!: Observable<boolean>;

  constructor(private _store: Store<AppState>){}

  ngOnInit(): void {
      this.isLoading$ = this._store.select('isLoading');
  }
}
