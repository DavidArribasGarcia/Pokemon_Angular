import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './detalles.component';
import { DetallesRoutingModule } from './detalles-routing.module';



@NgModule({
  declarations: [
    DetallesComponent
  ],
  imports: [
    CommonModule,DetallesRoutingModule
  ]
})
export class DetallesModule { }
