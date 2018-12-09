import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'music-root',
    templateUrl: 'music.component.html',
    styleUrls: ['./music.component.scss']
})

export class MusicComponent implements OnInit {

    public albums = [];
    public data: any;
    public p: 1;
    public albumSelected: any;
    public searchAlbum: string;
    public modal: NgbModalRef;

    constructor(
        private _music: MusicService,
        private toastr: ToastrService,
        private modalService: NgbModal
    ) { }

    ngOnInit() { 
        this.getMusic();
    }

    getMusic() {
        this._music.getMusiFromiTunes().subscribe(
            data => {
                this.albums = data.feed.entry;
                this.albums = [...this.albums];
                this.data = data;
                this.data = [...this.data];
            },
            error => {
                console.log(error);
                this.toastr.error(environment.SERVER_ERROR_MSG);
            },
            () => {
                this.albums = [...this.albums];
                this.data = [...this.data];
            }
        );
    }

    public seeMore(modal, item){
        this.albumSelected = item;
        this.modal = this.modalService.open(modal, { size: 'lg' });
    }
}