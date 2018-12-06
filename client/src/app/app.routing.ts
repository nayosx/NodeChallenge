import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: 'favorites',
        loadChildren: './favorites/favorites.module#FavoritesModule'
    },
    {
        path: 'music',
        loadChildren: './music/music.module#MusicModule'
    },
    {
        path: '',
        redirectTo: 'music',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule { }
