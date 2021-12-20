import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.interface';
import { TeamService } from 'src/app/shared/team.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  ejemplo$:Observable<Pokemon[]>;

  constructor(private teamService: TeamService) {
    
   }

  ngOnInit(): void {
    this.ejemplo$=this.teamService.pokemonTeam;
    
  }

}
