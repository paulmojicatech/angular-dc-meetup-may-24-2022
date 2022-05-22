import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeComponentStateService, HomeComponentViewModel } from '@pmt/marvel-home-module';
import { debounceTime, fromEvent, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'pmt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeComponentStateService]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
 
  viewModel$!: Observable<HomeComponentViewModel>;

  private _componentDestroyed$ = new Subject<void>();

  constructor(public domSanitizer: DomSanitizer, public componentStateSvc: HomeComponentStateService) {}

  ngOnInit(): void {
    this.viewModel$ = this.componentStateSvc.getViewModel();
  }

  ngAfterViewInit(): void {
      fromEvent(document, 'scroll').pipe(
        debounceTime(500),
        takeUntil(this._componentDestroyed$)
      ).subscribe((scrollEv) => {
        console.log('SCROLL', scrollEv);
        this.componentStateSvc.handleScrollEvent(scrollEv);
      });
  }
  ngOnDestroy(): void {
      this._componentDestroyed$.next();
  }
}
