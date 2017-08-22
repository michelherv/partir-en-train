import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AbstractService } from './abstract.service';
import {
  CommuneDto,
  DepartementDto,
  GareDto,
  TarifDto
} from '../objects';


@Injectable()
export class CommuneService extends AbstractService<CommuneDto> {
  constructor(http: Http) { super('/communes', CommuneDto, http) }
}

@Injectable()
export class DepartementService extends AbstractService<DepartementDto> {
  constructor(http: Http) { super('/departements', DepartementDto, http) }
}

@Injectable()
export class GareService extends AbstractService<GareDto> {
  constructor(http: Http) { super('/gares', GareDto, http) }
}

@Injectable()
export class TarifService extends AbstractService<TarifDto> {
  constructor(http: Http) { super('/tarifs', TarifDto, http) }
}

@Injectable()
export class TrajetService extends AbstractService<GareDto> {
  constructor(http: Http) { super('/trajets', GareDto, http) }
}
