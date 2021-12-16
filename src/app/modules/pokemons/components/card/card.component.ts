import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/core/models/pokemon.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemonUnico: any;
  constructor(private apiService: ApiService,private router: Router) { }

  handleClick(pokemon: Pokemon){
    this.router.navigate([`/detalle/${pokemon.id}`]);
  }
  ngOnInit(): void {
  }

}
