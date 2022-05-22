import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarvelHomeModule } from '@pmt/marvel-home-module';
import { HomeRouterModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRouterModule, MarvelHomeModule],
})
export class HomeModule {}
