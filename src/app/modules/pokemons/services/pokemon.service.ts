import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private subject = new BehaviorSubject<Pokemon[]>([]);
  pokemon$: Observable<Pokemon[]> = this.subject.asObservable();

  constructor(private apiService: ApiService) {
    this.apiService
      .getAllPokemons()
      .subscribe((pokemon: Pokemon[]) => this.subject.next(pokemon));
  }

  updatePokemonList(pokemon: Pokemon): void {
    const previousValue = this.subject.value;

    const updateValue = [
      pokemon,
      ...previousValue.filter((el) => el.id !== pokemon.id),
    ];
    this.subject.next(updateValue);
  }
}
