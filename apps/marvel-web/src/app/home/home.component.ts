import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WebHomeComponentStateService, HomeComponentViewModel } from '@pmt/marvel-home-module';
import { Observable } from 'rxjs';

@Component({
  selector: 'pmt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [WebHomeComponentStateService]
})
export class HomeComponent implements OnInit {
  
  viewModel$!: Observable<HomeComponentViewModel>;

  constructor(public domSanitizer: DomSanitizer, public componentStateSvc: WebHomeComponentStateService) {}

  ngOnInit(): void {
    this.viewModel$ = this.componentStateSvc.getViewModel();
  }
}
