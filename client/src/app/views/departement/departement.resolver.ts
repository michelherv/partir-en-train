import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';

import { DepartementService } from '../../services';
import { DepartementDto } from '../../objects';



@Injectable()
export class DepartementResolver implements Resolve<DepartementDto[]> {
  constructor(
    public departementService: DepartementService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DepartementDto[]> {
    // chargement des départements
    return this.departementService.getBy({}).map(departements => {
      // je cherche le département inconnu
      let departementInconnu = departements.find(item => !item.libelle);

      // s'il existe, je le place en fin de liste
      if (departementInconnu) {
        departements = departements.filter(item => !!item.libelle);
        departements.push(departementInconnu);
      }

      // je retourne la nouvelle liste de département
      return departements;
    });
  }
}
