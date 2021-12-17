import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from './equipo.component';
import { EquipoRoutingModule } from './equipo-routing.module';
import { ListModule } from '../../components/list/list.module';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [EquipoComponent],
  imports: [CommonModule, EquipoRoutingModule,ListModule,SharedComponentsModule],
})
export class EquipoModule {}
