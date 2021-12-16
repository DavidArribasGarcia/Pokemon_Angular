import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './detalles.component';
import { DetallesRoutingModule } from './detalles-routing.module';
import { DetalleModule } from '../../components/detalle/detalle.module';



@NgModule({
  declarations: [
    DetallesComponent
  ],
  imports: [
    CommonModule,DetallesRoutingModule,DetalleModule
  ]
})
export class DetallesModule { }
