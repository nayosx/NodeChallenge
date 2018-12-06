import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    public get() {
        return this.httpClient.get<any>(environment.USER_URL)
            .pipe(map(data => {
                return data;
            }));
    }

    public delete(id) {
        return this.httpClient.delete(environment.USER_URL.concat(`/${id}`))
            .pipe(map(data => {
                return data;
            }));
    }
}
