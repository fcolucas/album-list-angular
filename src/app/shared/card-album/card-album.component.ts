import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss'],
})
export class CardAlbumComponent {
  @Input() album!: Album & { thumbUrl: string };

  constructor(private router: Router) {}

  goToAlbum(album: Album) {
    const albumId = album ? album.id : null;
    this.router.navigate(['/album', { id: albumId }]);
  }
}
