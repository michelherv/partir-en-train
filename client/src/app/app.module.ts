import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSelectModule } from '@angular/material';
import { AngularOpenlayersModule } from 'angular2-openlayers';

import { ServiceModule } from './services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent, AccueilResolver } from './views/accueil';
import { DepartementComponent, DepartementResolver } from './views/departement';
import { GareComponent, GareResolver } from './views/gare';
import { TarifComponent, TarifResolver } from './views/tarif';
import { TrajetComponent, TrajetResolver } from './views/trajet';


@NgModule({
  imports: [
    AngularOpenlayersModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdSelectModule,
    ServiceModule
  ],
  declarations: [
    AppComponent,
    AccueilComponent,
    DepartementComponent,
    GareComponent,
    TarifComponent,
    TrajetComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" },
    AccueilResolver,
    DepartementResolver,
    GareResolver,
    TarifResolver,
    TrajetResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
