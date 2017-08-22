import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DepartementDto } from '../../objects';

interface Page<T> {
  index: number;
  items: T[];
}

@Component({
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.less']
})
export class DepartementComponent {
  // les départements paginés
  public departement: {
    pages?: Page<DepartementDto>[];
    selected?: Page<DepartementDto>;
  } = {};


  constructor(route: ActivatedRoute) {
    route.data.subscribe(data => {
      // je pagine les départements
      let perPage = 15; // il y en aura 15 par page
      this.departement.pages = [];
      // pour chaque département de ma liste
      for (let i = 0; i < data['departements'].length; i++) {
        // je récupère la page dans laquelle il va être ajouté
        let page = this.departement.pages[this.departement.pages.length - 1];

        // si la page n'existe page, je la crée et je l'ajoute à l'ensemble des  pages
        if (!page || (page.items.length >= perPage)) {
          page = {
            items: [],
            index: this.departement.pages.length + 1
          };
          this.departement.pages.push(page);
        }

        // je l'ajoute dans l'ensemble des départements de la page
        page.items.push(data['departements'][i]);
      }

      // Ajout du mécanisme de mise à jour de la page sélectionnée
      route.queryParams.subscribe(queryParams => {
        this.departement.selected = this.departement.pages[+queryParams['page'] - 1];
      });
    });
  }
}
