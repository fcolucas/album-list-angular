import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.scss'],
})
export class CardPhotoComponent {
  @Input() photo!: Photo;
}
