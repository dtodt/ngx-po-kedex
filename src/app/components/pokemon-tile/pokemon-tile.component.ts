import { Component, OnInit, Input } from '@angular/core';

import { PokemonListModel } from '@app/models';

@Component({
  selector: 'app-pokemon-tile',
  templateUrl: './pokemon-tile.component.html',
  styleUrls: ['./pokemon-tile.component.sass']
})
export class PokemonTileComponent implements OnInit {
  @Input() pokemon: PokemonListModel;

  constructor() {}

  ngOnInit(): void {}
}
