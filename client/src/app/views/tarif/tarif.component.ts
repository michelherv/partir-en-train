import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TarifService } from '../../services';
import { TarifDto } from '../../objects';


@Component({
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.less']
})
export class TarifComponent {
  public tarif: TarifDto;

  constructor(
    route: ActivatedRoute,
    tarifService: TarifService,
  ) {
    route.queryParams.subscribe(queryParam => {
      if (queryParam['origine'] && queryParam['destination']) {
        if (!this.tarif || (this.tarif.origine !== queryParam['origine']) || (this.tarif.destination !== queryParam['destination'])) {
          tarifService.getBy({
            origine: queryParam['origine'],
            destination: queryParam['destination']
          }).subscribe(tarifs => this.tarif = tarifs[0]);
        }
      } else {
        delete this.tarif;
      }
    });
  }
}
