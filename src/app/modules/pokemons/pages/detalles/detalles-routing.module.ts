import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './detalles.component';

const route: Routes=[
  {
    path: '',
    component: DetallesComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class DetallesRoutingModule { }
