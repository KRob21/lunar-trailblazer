import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./splash-page/splash-page.module').then(
        (m) => m.SplashPageModule
      ),
  },
  {path:'auth',
    loadChildren: () => import('./auth/auth.module').then(
      (m) =>m.AuthModule),
    },
  // Add other routes here
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
