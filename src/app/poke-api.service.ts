import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  PokemonListRequest,
  PokemonListResult,
  PokemonDetailResult
} from '@app/models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  getPokemonList(request: PokemonListRequest): Observable<PokemonListResult> {
    return this.http.get<any>(
      `${environment.pokeApiBaseUrl}pokemon?offset=${request.offset}&limit=${request.limit}`
    );
  }

  getPokemonDetails(id: number): Observable<PokemonDetailResult> {
    return this.http.get<any>(`${environment.pokeApiBaseUrl}pokemon/${id}/`);
  }
}
