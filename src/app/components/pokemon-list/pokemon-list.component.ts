import { Component, OnInit, Input } from '@angular/core';

import { PokemonListModel } from '@app/models';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: PokemonListModel[];

  constructor() {}

  ngOnInit(): void {}
}
