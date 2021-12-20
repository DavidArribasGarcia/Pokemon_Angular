import { Component, OnInit } from '@angular/core';
import { combineLatest, delay, map, Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.interface';
import { ApiService } from 'src/app/core/services/api.service';
import { TeamService } from 'src/app/shared/team.service';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  pokemon$: Observable<any | Pokemon[]>;
  buscando: boolean = false;

  constructor(
    private pokeService: PokemonService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.pokemon$ = combineLatest([
      this.pokeService.pokemon$,
      this.teamService.pokemonCustom,
    ]).pipe(map(([obs1, obs2]) => [...obs1, ...obs2]),delay(1500));
    //this.pokemon$ = this.pokeService.getAllPokemons();
  }

  buscador(busqueda: string) {
    if (busqueda.length >= 1) {
      this.buscando = true;
      // this.pokemon$ = this.apiService
      //   .getAllPokemons()
      this.pokemon$ = combineLatest([
        this.pokeService.pokemon$,
        this.teamService.pokemonCustom,
      ]).pipe(
        map(([obs1, obs2]) => [...obs1, ...obs2]),
        map((data: Pokemon[]) =>
          data.filter((pokemon: Pokemon) =>
            pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
          )
        )
      );
      // .pipe(map(([obs1, obs2]) => [...obs1, obs2]),
      //     map((data: Pokemon[]) =>
      //       data.filter((pokemon: Pokemon) => pokemon.name.includes(busqueda))
      //     )
      //   );
    } else {
      this.buscando = false;
      this.pokemon$ = combineLatest([
        this.pokeService.pokemon$,
        this.teamService.pokemonCustom,
      ]).pipe(map(([obs1, obs2]) => [...obs1, ...obs2]));
    }
  }
}
