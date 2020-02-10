import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

import { PokemonFavoriteButtonComponent } from './pokemon-favorite-button.component';

describe('PokemonTileComponent', () => {
  let component: PokemonFavoriteButtonComponent;
  let fixture: ComponentFixture<PokemonFavoriteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFavoriteButtonComponent],
      imports: [MatBadgeModule, MatButtonModule, MatIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
