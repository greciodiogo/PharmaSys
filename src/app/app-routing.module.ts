import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Containers

import { P404Component } from './resources/errors/404.component';
import { P403Component } from './resources/errors/403.component';
import { P500Component } from './resources/errors/500.component';
import { AuthGuard } from './core/security/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404',
      layout: { customLayout: false, layoutNavigationTop: false },
    },
  },
  {
    path: '403',
    component: P403Component,
    canActivate: [AuthGuard],
    data: {
      title: 'Page 403',
      layout: { customLayout: false, layoutNavigationTop: false },
    },
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500',
      layout: { customLayout: false, layoutNavigationTop: false },
    },
  },
  {
    path: '',
    data: {
      title: '',
    },
    loadChildren: () =>
      import('./resources/Modules/00Dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  }, 
 
  {
    path: 'acl',
    data: {
      title: 'Controle de Acesso',
      layout: { customLayout: false, layoutNavigationTop: true },
    },
    children: [
      {
        path: 'users',
        data: {
          title: 'Utilizadores',
          layout: { customLayout: false, layoutNavigationTop: true },
        },
        loadChildren: () =>
          import('./resources/Modules/06Security/02Users/users.module').then(
            (m) => m.UsersModule
          ),
      },
    ],
  },

  {
    path: '',
    data: {
      title: 'Login',
    },
    children: [
      {
        path: 'login',
        data: {
          title: 'Login',
          layout: { customLayout: false, layoutNavigationTop: true },
        },
        loadChildren: () =>
          import(
            './resources/Modules/06Security/00Auth/authentication.module'
          ).then((m) => m.AuthenticationModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
