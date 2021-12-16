import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { CardModule } from '../pokemons/components/card/card.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, WelcomeRoutingModule,MaterialModule],
})
export class WelcomeModule {}
