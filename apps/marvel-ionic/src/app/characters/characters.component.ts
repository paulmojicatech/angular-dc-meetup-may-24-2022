import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HomeComponentStateService, HomeComponentViewModel } from '@pmt/marvel-home-module';
import { Observable } from 'rxjs';

@Component({
  selector: 'pmt-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [HomeComponentStateService]
})
export class CharactersComponent implements OnInit {

  viewModel$!: Observable<HomeComponentViewModel>;

  constructor(private _homeStateSvc: HomeComponentStateService){}

  ngOnInit(): void {
      this.viewModel$ = this._homeStateSvc.getViewModel();
  }
}
