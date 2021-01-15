import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //(xa ngFor ngIf)
//importar RouterModule, Routes y componentes
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { Error404Component } from './pages/error404/error404.component';
import { PagesComponent } from './pages/pages.component';

//creo rutas
const routes: Routes = [
  //rutas protegidas - rutas hijas
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component }
    ]
  },

  //rutas publicas
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  // 
  { path: '**', component: Error404Component },
]

//import RouterModule
//export RouterModule
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
