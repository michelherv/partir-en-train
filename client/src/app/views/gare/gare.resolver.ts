import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { CommuneService, GareService } from '../../services';
import { CommuneDto, GareDto } from '../../objects';

interface GareData {
  communes: CommuneDto[];
  gares: GareDto[];
}


@Injectable()
export class GareResolver implements Resolve<GareData> {
  constructor(
    public communeService: CommuneService,
    public gareService: GareService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GareData> {
    // cargement des communes et des gares
    return Observable.forkJoin(
      this.communeService.getBy({ departement: route.params['departement'] }),
      this.gareService.getBy({ departement: route.params['departement'] }),
      (communes, gares) => {
        return {
          communes: communes,
          gares: gares
        }
      }
    );
  }
}
