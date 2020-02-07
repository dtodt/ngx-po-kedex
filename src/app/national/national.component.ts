import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { NationalState } from './state/national.state';
import { PokemonListModel } from '@app/models';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.sass']
})
export class NationalComponent implements OnInit {

  @Select(NationalState.pokemons) pokemons$: Observable<PokemonListModel[]>;

  constructor() {}

  ngOnInit(): void {}
}
