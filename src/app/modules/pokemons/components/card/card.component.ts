import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/core/models/pokemon.interface';
import { ApiService } from 'src/app/core/services/api.service';
import { TeamService } from 'src/app/shared/team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemonUnico: Pokemon;
  constructor(private apiService: ApiService,private router: Router,private teamService:TeamService) { }

  handleClick(pokemon: Pokemon){
    this.router.navigate([`/detalle/${pokemon.id}`]);
  }
  aniadirEquipo(pokemon:Pokemon){
    this.pokemonUnico.inTeam=!this.pokemonUnico.inTeam;
    if(this.pokemonUnico.inTeam){
       this.teamService.agregarEquipo(pokemon);
       Swal.fire({
         position: 'center',
         icon: 'success',
         title: `${this.pokemonUnico.name} se añadio a tu equipo!`,
         showConfirmButton: false,
         timer: 2000,
       });
    }else{
      this.teamService.removerPokemonEquipo(pokemon);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `${this.pokemonUnico.name} se eliminó de tu equipo!`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
   
  }
  ngOnInit(): void {
  }

}
