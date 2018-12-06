import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    public getUsers() {
        return this.httpClient.get<any>(environment.USER_URL)
            .pipe(map(data => {
                return data;
            }));
    }
}
