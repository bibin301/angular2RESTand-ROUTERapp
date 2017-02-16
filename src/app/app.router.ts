import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

import {ServicesComponent} from './services/services.component';
import { HelpComponent } from './help/help.component';
import{HttpComponentComponent} from './http-component/http-component.component'

export const router: Routes = [
    {path: '', redirectTo: 'services', pathMatch: 'full'},

 {path: 'services', component: ServicesComponent},
  {path: 'help', component: HelpComponent},
  {path: 'Restfull', component: HttpComponentComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);