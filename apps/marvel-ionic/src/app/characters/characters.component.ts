import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { Character } from '@pmt/marvel-apps-shared';
import { HomeComponentViewModel, IonicHomeComponentStateService } from '@pmt/marvel-home-module';
import { Observable } from 'rxjs';

@Component({
  selector: 'pmt-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [IonicHomeComponentStateService]
})
export class CharactersComponent implements OnInit {

  viewModel$!: Observable<HomeComponentViewModel>;
  currentCharacter$!: Observable<Character>;

  constructor(public routerOutlet: IonRouterOutlet, public homeStateSvc: IonicHomeComponentStateService){}

  ngOnInit(): void {
      this.viewModel$ = this.homeStateSvc.getViewModel();
      this.currentCharacter$ = this.homeStateSvc.getCurrentCharacter();
  }


}
