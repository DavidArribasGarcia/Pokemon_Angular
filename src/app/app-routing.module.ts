import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/guards.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./modules/pokemons/pages/listado/pokemons.module').then(
        (m) => m.PokemonsModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'detalle/:id',
    loadChildren: () =>
      import('./modules/pokemons/pages/detalles/detalles.module').then(
        (m) => m.DetallesModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'crear',
    loadChildren: () =>
      import('./modules/pokemons/pages/crear/crear.module').then(
        (m) => m.CrearModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'equipo',
    loadChildren: () =>
      import('./modules/pokemons/pages/equipo/equipo.module').then(
        (m) => m.EquipoModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
