import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from './equipo.component';
import { EquipoRoutingModule } from './equipo-routing.module';

@NgModule({
  declarations: [EquipoComponent],
  imports: [CommonModule, EquipoRoutingModule],
})
export class EquipoModule {}
