import { Component, OnInit } from '@angular/core';
import { CharacterDetailComponentStateService, CharacterDetailComponentViewModel } from '@pmt/marvel-character-detail';
import { Observable } from 'rxjs';

@Component({
  selector: 'pmt-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
  providers: [CharacterDetailComponentStateService]
})
export class CharacterDetailComponent implements OnInit {
  
  viewModel$!: Observable<CharacterDetailComponentViewModel>;

  constructor(private _componentStateSvc: CharacterDetailComponentStateService) {}

  ngOnInit(): void {
      this.viewModel$ = this._componentStateSvc.getViewModel();
  }
}
