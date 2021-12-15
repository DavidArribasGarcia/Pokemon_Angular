import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
