import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear.component';
import { CrearRoutingModule } from './crear-routing.module';

@NgModule({
  declarations: [CrearComponent],
  imports: [CommonModule, CrearRoutingModule],
})
export class CrearModule {}
