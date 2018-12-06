import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const iTUNE = 'https://itunes.apple.com/us/rss/topalbums/limit=30/json';
@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(private http: HttpClient) { }

  getMusiFromiTunes() { 
    return this.http.get<any>(iTUNE)
    .pipe(
      map(
        data => {
          return data;
        }
      )
    );
  }
}
