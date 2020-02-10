import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsModule } from '@ngxs/store';

import { HeaderModule } from '@app/components/header/header.module';
import { PokemonPortraitModule } from '@app/components/pokemon-portrait/pokemon-portrait.module';
import { PokemonTitleModule } from '@app/components/pokemon-title/pokemon-title.module';

import { PokemonDetailsState } from './state/pokemon-details.state';

import { PokemonDetailsComponent } from './pokemon-details.component';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailsComponent],
      imports: [
        HeaderModule,
        HttpClientModule,
        FlexLayoutModule,
        PokemonTitleModule,
        RouterTestingModule,
        PokemonPortraitModule,
        NgxsModule.forRoot([PokemonDetailsState])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
