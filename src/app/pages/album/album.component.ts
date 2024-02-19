import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { Photo } from 'src/app/core/types/types';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  @Input() albumTitle!: string;
  photos!: Photo[];

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const albumId = this.route.snapshot.paramMap.get('id');
    if (albumId) {
      this.albumService.get(Number(albumId)).subscribe((album) => {
        this.albumTitle = album.title;
      });

      this.albumService.getPhotos(Number(albumId)).subscribe((photos) => {
        this.photos = photos.slice(0, 10);
      });
    }
  }
}
