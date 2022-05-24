import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MarvelHomeModule} from '@pmt/marvel-home-module';
import { MatButtonModule } from '@angular/material/button';
import {MarvelAppsSharedModule} from '@pmt/marvel-apps-shared';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MarvelAppsSharedModule,
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
