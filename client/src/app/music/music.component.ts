import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const ORDER_BY_NAME = 0;
const ORDER_BY_GEN = 1;
const ORDER_BY_ART = 2;

@Component({
    selector: 'music-root',
    templateUrl: 'music.component.html',
    styleUrls: ['./music.component.scss']
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

    getMusic() {
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
        console.log(this.albumSelected);
    }

    public orderByNameOnChange(fromSelect) {
        let option = parseInt(fromSelect.target.value);
        switch(option) {
            case 1:
                this._atoz(ORDER_BY_NAME);
            break;
            case 2:
                this._ztoa(ORDER_BY_NAME);
            break;
            default:
                this.albums = [...this.defaultAlbums];
            break;
        }
    }

    public orderByGenOnChange(fromSelect) {
        let option = parseInt(fromSelect.target.value);
        switch(option) {
            case 1:
                this._atoz(ORDER_BY_GEN);
            break;
            case 2:
                this._ztoa(ORDER_BY_GEN);
            break;
            default:
                this.albums = [...this.defaultAlbums];
            break;
        }
    }

    public orderByArtOnChange(fromSelect) {
        let option = parseInt(fromSelect.target.value);
        switch(option) {
            case 1:
                this._atoz(ORDER_BY_ART);
            break;
            case 2:
                this._ztoa(ORDER_BY_ART);
            break;
            default:
                this.albums = [...this.defaultAlbums];
            break;
        }
    }

    private _atoz(orderBy) {
        this.albums.sort(
            (a, b) => {
                var nameA = null, nameB = null;
                switch(orderBy) {
                    case ORDER_BY_NAME:
                        nameA = a['im:name']['label'].toLowerCase();
                        nameB = b['im:name']['label'].toLowerCase();
                    break;
                    case ORDER_BY_GEN:
                        nameA = a.category.attributes.label.toLowerCase();
                        nameB = b.category.attributes.label.toLowerCase();
                    break;
                    case ORDER_BY_ART:
                        nameA = a['im:artist']['label'].toLowerCase();
                        nameB = b['im:artist']['label'].toLowerCase();
                    break;
                }
                
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            }
        );

        this.albums = [...this.albums];
    }

    private _ztoa(orderBy) {
        this.albums.sort(
            (a, b) => {
                var nameA = null, nameB = null;
                switch(orderBy) {
                    case ORDER_BY_NAME:
                        nameA = a['im:name']['label'].toLowerCase();
                        nameB = b['im:name']['label'].toLowerCase();
                    break;
                    case ORDER_BY_GEN:
                        nameA = a.category.attributes.label.toLowerCase();
                        nameB = b.category.attributes.label.toLowerCase();
                    break;
                    case ORDER_BY_ART:
                        nameA = a['im:artist']['label'].toLowerCase();
                        nameB = b['im:artist']['label'].toLowerCase();
                    break;
                }
                if (nameA > nameB)
                    return -1;
                if (nameA < nameB)
                    return 1;
                return 0;
            }
        );

        this.albums = [...this.albums];
    }
}