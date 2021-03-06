import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { IonContent, IonRouterOutlet } from '@ionic/angular';
import { Character } from '@pmt/marvel-apps-shared';
import {
  HomeComponentViewModel,
  IonicHomeComponentStateService
} from '@pmt/marvel-home-module';
import { debounceTime, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'pmt-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [IonicHomeComponentStateService],
})
export class CharactersComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer')
  scrollContainer!: IonContent;

  viewModel$!: Observable<HomeComponentViewModel>;
  currentCharacter$!: Observable<Character>;

  private _componentDestroyed$ = new Subject<void>();

  constructor(
    public routerOutlet: IonRouterOutlet,
    public homeStateSvc: IonicHomeComponentStateService
  ) {}

  ngOnInit(): void {
    this.viewModel$ = this.homeStateSvc.getViewModel();
    this.currentCharacter$ = this.homeStateSvc.getCurrentCharacter();
  }

  ngAfterViewInit(): void {
    this.scrollContainer.ionScroll
      .pipe(debounceTime(500), takeUntil(this._componentDestroyed$))
      .subscribe((scrollEv: CustomEvent) => {
        const updatedScroll = scrollEv.detail.currentY;
        this.homeStateSvc.handleScrollEvent(updatedScroll);
      });
  }

  ngOnDestroy(): void {
    this._componentDestroyed$.next();
  }
}
