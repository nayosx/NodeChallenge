import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'selector-favorites',
    templateUrl: 'favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class FavoritesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}