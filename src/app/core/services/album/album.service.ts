import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Album, Photo } from '../../types/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl: string = environment.apiUrl;
  private cache$!: Observable<Album[]>;

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Album[]> {
    if (!this.cache$) {
      this.cache$ = this.httpClient
        .get<Album[]>(`${this.apiUrl}/albums`)
        .pipe(shareReplay(1));
    }

    return this.cache$;
  }

  get(idAlbum: string): Observable<Album> {
    return this.httpClient.get<Album>(`${this.apiUrl}/albums/${idAlbum}`);
  }

  getPhotos(idAlbum: string): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(
      `${this.apiUrl}/photos?idAlbum=${idAlbum}`
    );
  }
}
