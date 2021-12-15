import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./modules/pokemons/pages/listado/pokemons.module').then(
        (m) => m.PokemonsModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'detalle',
    loadChildren: () =>
      import('./modules/pokemons/pages/detalles/detalles.module').then((m) => m.DetallesModule),
  },
  {
    path: 'crear',
    loadChildren: () =>
      import('./modules/pokemons/pages/crear/crear.module').then((m) => m.CrearModule),
  },
  {
    path: 'equipo',
    loadChildren: () => 
      import('./modules/pokemons/pages/equipo/equipo.module').then((m) => m.EquipoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
