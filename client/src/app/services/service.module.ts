import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  CommuneService,
  DepartementService,
  GareService,
  TarifService,
  TrajetService
} from './factory.service';


@NgModule({
  imports: [HttpModule],
  providers: [
    CommuneService,
    DepartementService,
    GareService,
    TarifService,
    TrajetService
  ]
})
export class ServiceModule { }
