import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../core/models/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private subject = new BehaviorSubject<any>([]);
  private pokemonTeam$: Observable<Pokemon[]> = this.subject.asObservable();

  private customSubject = new BehaviorSubject<any>([]);
  private customPokemon$: Observable<any[]> = this.customSubject.asObservable();

  get pokemonTeam(): Observable<Pokemon[]> {
    return this.pokemonTeam$;
  }

  get pokemonCustom(): Observable<any[]> {
    return this.customPokemon$;
  }

  agregarEquipo(pokemon: Pokemon) {
    const equipoActual = this.subject.value;
    const equipoActualizado = [...equipoActual, pokemon];
    this.subject.next(equipoActualizado);
  }

  crearPokemonCustom(pokemon: any): void {
    const equipoActual = this.customSubject.value;
    const equipoActualizado = [...equipoActual, pokemon];
    this.customSubject.next(equipoActualizado);
  }
}
