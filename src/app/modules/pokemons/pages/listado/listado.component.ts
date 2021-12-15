import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
}
