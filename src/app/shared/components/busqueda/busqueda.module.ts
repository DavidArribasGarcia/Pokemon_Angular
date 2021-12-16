import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BusquedaComponent
  ],
  imports: [
    CommonModule,MaterialModule,FormsModule
  ],
  exports: [
    BusquedaComponent
  ]
})
export class BusquedaModule { }
