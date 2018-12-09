import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(private http: HttpClient) { }

  getMusicFromiTunes() { 
    return this.http.get<any>(environment.ITUNE)
    .pipe(
      map(
        data => {
          return data;
        }
      )
    );
  }
}
