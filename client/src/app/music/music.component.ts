import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const ORDER_BY_NAME = 0;
const ORDER_BY_GEN = 1;
const ORDER_BY_ART = 2;
const DESC = 3;
const ASC = 4;
const A_TO_Z = 1;
const Z_TO_A = 2;

@Component({
    selector: 'music-root',
    templateUrl: 'music.component.html',
    styleUrls: ['./music.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class MusicComponent implements OnInit {

    public albums = [];
    public defaultAlbums = [];
    public data: any;
    public p: 1;
    public albumSelected: any;
    public searchAlbum: string;
    public orderByName = null;

    constructor(
        private _music: MusicService,
        private toastr: ToastrService,
        private modalService: NgbModal
    ) { }

    ngOnInit() { 
        this.getMusic();
    }

    public getMusic() {
        this._music.getMusicFromiTunes().subscribe(
            data => {
                this.albums = data.feed.entry;
                this.defaultAlbums = data.feed.entry;
            },
            error => {
                console.log(error);
                this.toastr.error(environment.SERVER_ERROR_MSG);
            },
            () => {
                this.albums = [...this.albums];
                this.defaultAlbums = [...this.defaultAlbums];
            }
        );
    }

    public seeMore(modal, item){
        this.albumSelected = item;
        this.modalService.open(modal);
    }

    public orderAlbums(fromSelect, orderBy) {
        let option = parseInt(fromSelect.target.value);
        switch(option) {
            case A_TO_Z:
                this._orderBy(ASC, orderBy);
            break;
            case Z_TO_A:
                this._orderBy(DESC, orderBy);
            break;
            default:
                this.albums = [...this.defaultAlbums];
            break;
        }
    }

    private _orderBy(orderBy, order) {
        this.albums.sort(
            (a, b) => {
                var nameA = null, nameB = null, value = 0;
                switch(order) {
                    case ORDER_BY_NAME:
                        nameA = a['im:name'].label.toLowerCase();
                        nameB = b['im:name'].label.toLowerCase();
                    break;
                    case ORDER_BY_GEN:
                        nameA = a.category.attributes.label.toLowerCase();
                        nameB = b.category.attributes.label.toLowerCase();
                    break;
                    case ORDER_BY_ART:
                        nameA = a['im:artist'].label.toLowerCase();
                        nameB = b['im:artist'].label.toLowerCase();
                    break;
                }

                switch(orderBy) {
                    case ASC:
                        value = this._asc(nameA, nameB);
                    break;
                    case DESC:
                        value = this._desc(nameA, nameB);
                    break;
                }

                return value;
            }
        );

        this.albums = [...this.albums];
    }

    private _asc(nameA, nameB) {
        let value = 0;
        if (nameA < nameB)
            value = -1;
        if (nameA > nameB)
            value = 1;
        return value;
    }

    private _desc(nameA, nameB) {
        let value = 0;
        if (nameA > nameB)
            value = -1;
        if (nameA < nameB)
            value = 1;
        return value;
    }

    public encodeText(stg) {
        return encodeURI(stg);
    }
}