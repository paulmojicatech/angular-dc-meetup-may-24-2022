import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { homeModuleReducer } from './reducer/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './effects/home.effects';


@NgModule({
  imports: [CommonModule, HttpClientModule, StoreModule.forFeature('home', homeModuleReducer), EffectsModule.forFeature([HomeEffects])],
  exports: [StoreModule, EffectsModule]
})
export class MarvelHomeModule {}
