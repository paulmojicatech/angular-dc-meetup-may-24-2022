import { Component, OnInit } from '@angular/core';
import { HomeComponentStateService, HomeComponentViewModel } from '@pmt/marvel-home-module';
import { Observable } from 'rxjs';

@Component({
  selector: 'pmt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeComponentStateService]
})
export class HomeComponent implements OnInit {
  
  viewModel$!: Observable<HomeComponentViewModel>;

  constructor(private _componentStateSvc: HomeComponentStateService) {}

  ngOnInit(): void {
    this.viewModel$ = this._componentStateSvc.getViewModel();
  }
}
