import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{routes} from './app.router';

import { AppComponent } from './app.component';

import { ServicesComponent } from './services/services.component';
import { HelpComponent } from './help/help.component';
import { HttpComponentComponent } from './http-component/http-component.component';



@NgModule({
  declarations: [
    AppComponent,

    ServicesComponent,
    HelpComponent,
    HttpComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
