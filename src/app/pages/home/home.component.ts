import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { Album } from 'src/app/core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  albums!: (Album & { thumbUrl: string })[];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.list().subscribe((response) => {
      const albums: (Album & { thumbUrl: string })[] = [];
      response.forEach((album) => {
        const idPhoto = 1 + (album.id - 1) * 50;
        this.albumService.getThumb(idPhoto).subscribe((photo) => {
          albums.push({
            ...album,
            thumbUrl: photo.url,
          });
        });
      });

      this.albums = albums;
    });
  }
}
