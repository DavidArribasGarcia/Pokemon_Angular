import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado.component';

const route: Routes = [
  {
    path: '',
    component: ListadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
