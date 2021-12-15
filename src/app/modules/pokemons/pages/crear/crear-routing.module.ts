import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear.component';

const route: Routes=[{
  path: '',
  component: CrearComponent
}]

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class CrearRoutingModule { }
