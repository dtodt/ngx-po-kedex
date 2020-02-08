import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState, FavoritePokemonMap } from './app.state';
import { FavoritePokemon, UnFavoritePokemon } from './app.actions';

const pokemonMock = {
  nr: 1,
  name: 'mock',
  url: 'mock',
  sprite: 'mock'
};

describe('App actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppState])]
    }).compileComponents();
    store = TestBed.inject(Store);
  }));

  it('should favorite a pokemon', () => {
    store.dispatch(new FavoritePokemon(pokemonMock));
    store
      .select(state => state.app.favorites)
      .subscribe((favorites: FavoritePokemonMap) => {
        expect(favorites[1]).toEqual(jasmine.objectContaining(pokemonMock));
      });
  });

  it('should remove a favorite a pokemon', () => {
    store.dispatch(new UnFavoritePokemon(pokemonMock.nr));
    store
      .select(state => state.app.favorites)
      .subscribe((favorites: UnFavoritePokemon) => {
        expect(favorites[1]).toBeUndefined();
      });
  });
});
