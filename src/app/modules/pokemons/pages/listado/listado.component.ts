import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  pokemon$: Observable<Pokemon[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.pokemon$ = this.apiService.getAllPokemons();
  }

  buscador(busqueda: string) {
    if (busqueda.length >= 1) {
      this.pokemon$ = this.apiService
        .getAllPokemons()
        .pipe(
          map((data: Pokemon[]) =>
            data.filter((pokemon: Pokemon) => pokemon.name.includes(busqueda))
          )
        );
    }else{
      this.pokemon$ = this.apiService.getAllPokemons();
    }
  }
}
