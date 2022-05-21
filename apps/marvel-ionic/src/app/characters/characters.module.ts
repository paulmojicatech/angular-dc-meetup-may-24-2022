import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MarvelHomeModule } from '@pmt/marvel-home-module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';


@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, CharactersRoutingModule, MarvelHomeModule, IonicModule],
})
export class CharactersModule {}
 