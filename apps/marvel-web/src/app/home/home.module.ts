import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home-routing.module';
import { MarvelHomeModule } from '@pmt/marvel-home-module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRouterModule, MarvelHomeModule],
})
export class HomeModule {}
