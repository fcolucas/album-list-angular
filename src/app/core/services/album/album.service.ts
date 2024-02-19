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

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getThumb(idPhoto: number): Observable<Photo> {
    return this.httpClient.get<Photo>(`${this.apiUrl}/photos/${idPhoto}`);
  }

  get(idAlbum: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.apiUrl}/albums/${idAlbum}`);
  }

  getPhotos(idAlbum: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(
      `${this.apiUrl}/photos?idAlbum=${idAlbum}`
    );
  }
}
