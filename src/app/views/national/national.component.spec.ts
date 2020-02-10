import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsModule } from '@ngxs/store';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PokemonListModule } from '@app/components/pokemon-list/pokemon-list.module';

import { NationalState } from './state/national.state';
import { NationalComponent } from './national.component';

describe('NationalComponent', () => {
  let component: NationalComponent;
  let fixture: ComponentFixture<NationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        NgxsModule.forRoot([NationalState]),
        FlexLayoutModule,
        MatToolbarModule,
        PokemonListModule
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
