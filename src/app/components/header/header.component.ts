import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { AppState } from '@app/state/app.state';
import { NavigateFavoritePokemons } from '@app/state/app.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  @Input() title = 'Pokedex';
  @Input() subTitle: string;
  /**
   * In child pages we hide the favorites button and show the back button.
   */
  @Input() isChildPage = false;
  /**
   * The default path for back button is home.
   */
  @Input() backwardPath = '/';

  constructor(private store: Store) {}

  favoriteCount(): number {
    const favorites = this.store.selectSnapshot(AppState.favorites);
    if (favorites) {
      return Object.keys(favorites).length;
    }
    return;
  }

  getTitle(): string {
    return `${this.title}${this.subTitle ? ' - ' + this.subTitle : ''}`;
  }

  goBack(): void {
    this.store.dispatch(
      new Navigate([this.backwardPath], null, { replaceUrl: true })
    );
  }

  goFavorites(): void {
    this.store.dispatch(new NavigateFavoritePokemons());
  }
}
