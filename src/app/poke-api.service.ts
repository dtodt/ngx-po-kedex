import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokemonListResult } from '@app/models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  getPokemonList(offset: number, limit: number): Observable<PokemonListResult> {
    return this.http.get<any>(
      `${environment.pokeApiBaseUrl}pokemon?offset=${offset}&limit=${limit}`
    );
  }
}
