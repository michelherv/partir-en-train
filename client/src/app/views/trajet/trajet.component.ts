import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TrajetService } from '../../services';
import { GareDto } from '../../objects';


@Component({
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.less']
})
export class TrajetComponent {
  public gare: {
    origine: {
      items?: GareDto[];
      selected?: GareDto;
    };
    destination: {
      items?: GareDto[];
      selected?: GareDto;
    };
  } = {
    origine: {},
    destination: {}
  };

  constructor(
    public route: ActivatedRoute,
    public trajetService: TrajetService,
    public router: Router
  ) {
    route.data.subscribe(data => {
      // chargement des gares de départ
      this.gare.origine.items = data['origines'];

      // écoute de la sélection de la gare de départ
      route.queryParams.subscribe(queryParam => {
        // normalise une chainge de caractère (pour une comparaison éfficace)
        let normalize = (myStr: string) => {
          return (myStr || '').replace(/[^0-9a-z]/gi, '').toLowerCase();
        };

        delete this.gare.destination.selected;
        // si la gare d'origine est défine, alors on charge les gares destinations
        if (queryParam['origine'] && (!this.gare.origine.selected || (this.gare.origine.selected.libelle !== queryParam['origine']))) {
          this.trajetService.getBy({ origine: queryParam['origine'] }).subscribe(destinatitons => {
            this.gare.destination.items = destinatitons;
            this.gare.destination.selected = (this.gare.destination.items || []).find(item => item.libelle === queryParam['destination']);
          });
        }

        this.gare.origine.selected = this.gare.origine.items.find(item => normalize(item.libelle) === normalize(queryParam['origine']));
      });
    });
  }

  doSelect(gare: GareDto, origine = true) {
    if (origine) {
      this.router.navigate([], {
        queryParamsHandling: 'merge',
        queryParams: {
          origine: gare.libelle
        }
      });
    } else {
      this.router.navigate([], {
        queryParamsHandling: 'merge',
        queryParams: {
          destination: gare.libelle
        }
      });
    }
  }
}
