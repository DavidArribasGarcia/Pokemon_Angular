import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/core/models/pokemonDetails.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  @Input() pokemon: PokemonDetails | undefined;
  constructor() { }

  ngOnInit(): void {
  }


}
