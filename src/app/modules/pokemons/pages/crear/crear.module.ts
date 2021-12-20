import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear.component';
import { CrearRoutingModule } from './crear-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrearComponent],
  imports: [CommonModule, CrearRoutingModule,MaterialModule,ReactiveFormsModule],
})
export class CrearModule {}
