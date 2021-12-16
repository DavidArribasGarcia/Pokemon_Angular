import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from './spinner/spinner.module';
import { BusquedaModule } from './busqueda/busqueda.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SpinnerModule, BusquedaModule],
  exports: [SpinnerModule, BusquedaModule],
})
export class SharedComponentsModule {}
