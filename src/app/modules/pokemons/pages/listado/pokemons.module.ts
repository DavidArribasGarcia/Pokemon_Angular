import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [ListadoComponent],
  imports: [CommonModule, PokemonsRoutingModule,SharedComponentsModule],
})
export class PokemonsModule {}
