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
    private rows = [
        { name: 'Austin', gender: 'Male', company: 'Swimlane' },
        { name: 'Dany', gender: 'Male', company: 'KFC' },
        { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];
    private columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];
    constructor(private userService: UserService) { }

    ngOnInit() { }

    getUsers() {
        this.userService.getUsers().subscribe(
            data => {

            },
            error => {

            },
            () => {

            }
        );
    }
}
