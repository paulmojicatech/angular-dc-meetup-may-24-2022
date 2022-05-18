import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home-routing.module';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

@NgModule({
  declarations: [HomeComponent, CharacterDetailComponent],
  imports: [CommonModule, HomeRouterModule],
})
export class HomeModule {}
