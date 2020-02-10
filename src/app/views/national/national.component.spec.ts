import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsModule } from '@ngxs/store';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderModule } from '@app/components/header/header.module';
import { LoaderModule } from '@app/components/loader/loader.module';
import { PokemonListModule } from '@app/components/pokemon-list/pokemon-list.module';
import { PokemonFavoriteButtonModule } from '@app/components/pokemon-favorite-button/pokemon-favorite-button.module';

import { NationalState } from './state/national.state';
import { NationalComponent } from './national.component';

describe('NationalComponent', () => {
  let component: NationalComponent;
  let fixture: ComponentFixture<NationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HeaderModule,
        LoaderModule,
        HttpClientModule,
        FlexLayoutModule,
        MatToolbarModule,
        PokemonListModule,
        RouterTestingModule,
        PokemonFavoriteButtonModule,
        NgxsModule.forRoot([NationalState])
      ],
      declarations: [NationalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
