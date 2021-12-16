import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonDetails } from 'src/app/core/models/pokemonDetails.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  pokemonDetails$: Observable<PokemonDetails>;

  constructor(private apiservice: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.pokemonDetails$=this.apiservice.getPokemon(this.route.snapshot.params['id'])
  }
}
