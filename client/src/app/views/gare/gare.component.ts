import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

import { CommuneService, GareService } from '../../services';
import { CommuneDto, GareDto, PointDto } from '../../objects';


@Component({
  templateUrl: './gare.component.html',
  styleUrls: ['./gare.component.less']
})
export class GareComponent {
  public center = new PointDto();

  public commune: {
    items?: CommuneDto[];
    selected?: CommuneDto;
  } = {};

  public gare: {
    items?: GareDto[];
    filteredItems?: GareDto[];
    selected?: GareDto;
  } = {};

  constructor(route: ActivatedRoute, router: Router) {
    route.data.subscribe(data => {
      // chargement des gares
      this.gare.items = data['data']['gares'];

      // Ajout du mécanisme de mise à jour de la gare sélectionnée
      route.queryParams.subscribe(queryParams => {
        this.gare.selected = this.gare.items.find(item => item.libelle === queryParams['gare']);
      });

      // détermination du center de la carte
      let points = this.gare.items.map(item => item.coordonneesGeographiques);
      this.center.x = (Math.max(...points.map(point => point.x)) + Math.min(...points.map(point => point.x))) / 2;
      this.center.y = (Math.max(...points.map(point => point.y)) + Math.min(...points.map(point => point.y))) / 2;
      this.center.x = this.center.x || 2.352424;
      this.center.y = this.center.y || 48.856476;


      // chargement des communes
      this.commune.items = data['data']['communes'];
      this.commune.items.unshift(new CommuneDto({ libelle: 'Toutes les communes' }));

      // Ajout du mécanisme de mise à jour de la commune sélectionnée
      route.queryParams.subscribe(queryParams => {
        this.commune.selected = this.commune.items.find(item => item.libelle === queryParams['commune']);
        if (this.commune.selected) {
          this.gare.filteredItems = (this.gare.items || []).filter(item => (item.commune === this.commune.selected.libelle) || (this.commune.selected.libelle === 'Toutes les communes'));

          // activation des popover de présentation des gares
          $(function () {
            $('[data-toggle="popover"]').popover()
          })
        } else {
          router.navigate([], {
            queryParams: { commune: this.commune.items[0].libelle },
            queryParamsHandling: 'merge'
          })
        }
      });
    });
  }

  getTemplate = (gare: GareDto) => {
    return `
      <dl class="dl-horizontal">
        <dt>Code UIC</dt>
        <dd>${gare.codeUic}</dd>

        <dt>Fret</dt>
        <dd>${gare.fret ? 'Oui' : 'Non'}</dd>

        <dt>Voyageurs</dt>
        <dd>${gare.voyageurs ? 'Oui' : 'Non'}</dd>

        <dt>Code ligne</dt>
        <dd>${gare.codeLigne}</dd>

        <dt>Rang</dt>
        <dd>${gare.rang}</dd>

        <dt>PK</dt>
        <dd>${gare.pk}</dd>

        <dt>Lambert 93</dt>
        <dd>(${gare.lambert93.x}, ${gare.lambert93.y})</dd>

        <dt>WGS 84</dt>
        <dd>(${gare.wgs84.x}, ${gare.wgs84.y})</dd>

        <dt>Coordonnées géographiques</dt>
        <dd>(${gare.coordonneesGeographiques.x}, ${gare.coordonneesGeographiques.y})</dd>

        <dd class="text-right">
          <br>
          <a href="#/partir?origine=${gare.libelle}" class="btn btn-primary btn-sm">Partir d'ici</a>
        </dd>
      </dl>
    `;
  };
}
