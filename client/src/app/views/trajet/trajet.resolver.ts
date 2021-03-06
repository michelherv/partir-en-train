import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TrajetService } from '../../services';
import { DepartementDto } from '../../objects';


@Injectable()
export class TrajetResolver implements Resolve<DepartementDto[]> {
  constructor(
    public trajetService: TrajetService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DepartementDto[]> {
    return this.trajetService.getBy({});
  }
}
