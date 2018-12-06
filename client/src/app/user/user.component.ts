import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class UserComponent implements OnInit {
    loadingIndicator: Boolean = true;
    reorderable: Boolean = true;
    private rows: Array<any>;
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.get();
    }

    get() {
        this.userService.get().subscribe(
            data => {
                this.rows = data;
                this.rows = [...this.rows];
            },
            error => {

            },
            () => {

            }
        );
    }
    delete(id) {
        this.userService.delete(id).subscribe(
            data => {
                this.get();
            },
            error => {

            }
        );
    }
}
