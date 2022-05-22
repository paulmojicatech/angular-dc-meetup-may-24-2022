import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MarvelAppsSharedModule } from '@pmt/marvel-apps-shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MarvelAppsSharedModule, HttpClientModule, StoreDevtoolsModule.instrument()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
