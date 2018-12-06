import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

@Component({
    selector: 'music-root',
    templateUrl: 'music.component.html',
    styleUrls: ['./music.component.scss']
})

export class MusicComponent implements OnInit {

    public data = [];
    constructor(
        private _music: MusicService,
        private toastr: ToastrService,
    ) { }

    ngOnInit() { 
        this.getMusic();
    }

    getMusic() {
        this._music.getMusiFromiTunes().subscribe(
            data => {
                this.data = data;
                this.data = [...this.data];
                console.log(data);
            },
            error => {
                console.log(error);
                this.toastr.error(environment.SERVER_ERROR_MSG);
            },
            () => {
                this.data = [...this.data];
            }
        );
    }
}