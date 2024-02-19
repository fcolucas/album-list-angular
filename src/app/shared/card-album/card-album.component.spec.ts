import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlbumComponent } from './card-album.component';

describe('CardAlbumComponent', () => {
  let component: CardAlbumComponent;
  let fixture: ComponentFixture<CardAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAlbumComponent]
    });
    fixture = TestBed.createComponent(CardAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
