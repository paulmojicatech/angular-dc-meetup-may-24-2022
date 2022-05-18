import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
    {
        path: 'home',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'character-detail',
        pathMatch: 'full',
        loadChildren: () => import('./character-detail/character-detail.module').then(m => m.CharacterDetailModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }