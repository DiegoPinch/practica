import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './core/principal/principal.component';


const routes: Routes = [
    {
      path: '',
      component: PrincipalComponent,
      children: [
        { path: '', redirectTo: 'personas', pathMatch: 'full' },
        {
          path: 'personas',
          loadChildren: () =>
            import('./personas/personas.module').then((m) => m.PersonasModule),
        },
        {
          path: 'genero',
          loadChildren: () =>
            import('./genero/genero.module').then((m) => m.GeneroModule),
        },
      ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
