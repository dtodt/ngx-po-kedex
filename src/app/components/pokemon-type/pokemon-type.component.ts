import { Component, Input } from '@angular/core';

import { PokemonTypeSlot } from '@app/models';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.sass']
})
export class PokemonTypeComponent {
  @Input() typeList: PokemonTypeSlot[] = [];
}
