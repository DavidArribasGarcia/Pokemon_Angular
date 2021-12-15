import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, MaterialModule, RouterModule,CardModule],
  exports: [ListComponent],
})
export class ListModule {}
