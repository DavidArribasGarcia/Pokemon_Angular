import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.interface';
import { PokemonDetails } from '../models/pokemonDetails.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemon[]> {
    // TODO: utilizar interceptor
    return this.http
      .get<Pokemon[]>(`${environment.baseUrl}/pokemon?limit=1000`)
      .pipe(map(this.transformData),delay(1500));
  }
  getPokemon(id: string): Observable<PokemonDetails> {

    return this.http.get<PokemonDetails>(`${environment.baseUrl}/pokemon/${id}`);

  }

  private transformData(resp: any): any[] {
    const pokemonList: any[] = resp.results.map((poke: any) => {
      const urlArr = poke.url.split('/');
      const id = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return {
        id,
        pic,
        name: poke.name,
        inTeam: false,
        notCustom: true,
      };
    });

    return pokemonList;
  }
}
