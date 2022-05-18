import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { MarvelSharedAppsEffects } from "./effects/marvel-apps-shared.effects";
import { appReducer } from "./reducer/marvel-shared-apps.reducer";

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forRoot([MarvelSharedAppsEffects]),
        StoreModule.forRoot(appReducer)
    ],
    exports: [
        EffectsModule, StoreModule
    ]
})
export class MarvelAppsSharedModule {}