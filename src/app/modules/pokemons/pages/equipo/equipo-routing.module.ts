import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './equipo.component';

const route: Routes=[{
  path:'',
  component: EquipoComponent
}]

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports:[
    RouterModule
  ]
})
export class EquipoRoutingModule { }
