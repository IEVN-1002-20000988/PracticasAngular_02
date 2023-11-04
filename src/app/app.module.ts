import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { TemperatureListComponent } from './temperature-list/temperature-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MultiplicacionAxBComponent } from './multiplicacion-ax-b/multiplicacion-ax-b.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { MenuComponent } from './menu/menu/menu.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    TemperatureListComponent,
    MultiplicacionAxBComponent,
    CinepolisComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
