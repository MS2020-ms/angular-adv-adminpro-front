import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //crea las directivas de ngFor ngIf
import { RouterModule } from '@angular/router';
//equivale: //import { AppRoutingModule } from '../app-routing.module'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //importar xa usar ngModule en html

//Modulos:
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';


//Modulo independiente de las rutas autenticadas:

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    PerfilComponent
  ],
  //Los exportos por si necesito estos componentes fuera de este modulo (pages.module.ts)
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  //import FormsModule (xa usar ngModel desde progress html), RouterModule, ComponentsModule, SharedModule [SOLO donde los voy a utilizar]
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
//importar PagesModule en archivo app.module.ts
export class PagesModule { }
