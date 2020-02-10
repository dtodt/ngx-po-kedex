import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';

import { PokemonTitleModule } from '@app/components/pokemon-title/pokemon-title.module';

import { PokemonTileComponent } from './pokemon-tile.component';

describe('PokemonTileComponent', () => {
  let component: PokemonTileComponent;
  let fixture: ComponentFixture<PokemonTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonTileComponent],
      imports: [FlexLayoutModule, MatRippleModule, PokemonTitleModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
