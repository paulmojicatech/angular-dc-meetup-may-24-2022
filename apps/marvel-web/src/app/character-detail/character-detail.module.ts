import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { CharacterDetailComponent } from './character-detail.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [CommonModule, CharacterDetailRoutingModule, MatExpansionModule, MatIconModule, MatButtonModule],
})
export class CharacterDetailModule {}
