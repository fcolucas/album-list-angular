import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { Album } from 'src/app/core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  albums!: Album[];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.list().subscribe((response) => {
      this.albums = response;
    });
  }
}
