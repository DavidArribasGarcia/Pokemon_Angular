import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../core/models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  subject = new BehaviorSubject<Pokemon[]>([]);
  pokemonTeam$ = this.subject.asObservable();


  agregarEquipo(pokemon:Pokemon){
    const equipoActual=this.subject.value;
    const equipoActualizado=[...equipoActual,pokemon];
    this.subject.next(equipoActualizado);
  }

}
