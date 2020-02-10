import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PokemonTypeModule } from '@app/components/pokemon-type/pokemon-type.module';

import { PokemonPortraitComponent } from './pokemon-portrait.component';

describe('PokemonPortraitComponent', () => {
  let component: PokemonPortraitComponent;
  let fixture: ComponentFixture<PokemonPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonPortraitComponent],
      imports: [
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        PokemonTypeModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
