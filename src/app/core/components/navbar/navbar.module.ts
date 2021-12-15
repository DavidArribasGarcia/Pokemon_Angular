import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
