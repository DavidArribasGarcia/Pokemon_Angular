import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';
import 'animate.css';
@NgModule({
  declarations: [DetalleComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [DetalleComponent],
})
export class DetalleModule {}
