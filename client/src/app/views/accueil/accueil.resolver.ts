import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AbstractDto } from '../../objects';


@Injectable()
export class AccueilResolver implements Resolve<AbstractDto[]> {
  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): AbstractDto[] {
    return [];
  }
}
