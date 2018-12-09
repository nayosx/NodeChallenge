import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
                this._atoz();
            break;
            case 2:
                this._ztoa();
            break;
            default:
                this.albums = [...this.defaultAlbums];
            break;
        }
    }

    private _atoz() {
        this.albums.sort(
            (a, b) => {
                var nameA=a['im:name']['label'].toLowerCase(), nameB=b['im:name']['label'].toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            }
        );

        this.albums = [...this.albums];
    }

    private _ztoa() {
        this.albums.sort(
            (a, b) => {
                var nameA=a['im:name']['label'].toLowerCase(), nameB=b['im:name']['label'].toLowerCase();
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