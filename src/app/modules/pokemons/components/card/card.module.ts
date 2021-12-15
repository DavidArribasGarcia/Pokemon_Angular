import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [CardComponent],
})
export class CardModule {}
