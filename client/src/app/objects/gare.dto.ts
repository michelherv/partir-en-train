import { AbstractDto } from './abstract.dto';
import { PointDto } from './point.dto';


export class GareDto extends AbstractDto {
    public codeUic: number;
    public libelle: string;
    public fret: boolean;
    public voyageurs: boolean;
    public codeLigne: string;
    public rang: number;
    public pk: string;
    public lambert93: PointDto;
    public wgs84: PointDto;
    public commune: string;
    public departement: string;
    public coordonneesGeographiques: PointDto;
    public tgv: boolean;


    constructor(data?: any) {
        super(data);

        data = data || {};
        this.codeUic = data.codeUic;
        this.libelle = data.libelle;
        this.fret = data.fret;
        this.voyageurs = data.voyageurs;
        this.codeLigne = data.codeLigne;
        this.rang = data.rang;
        this.pk = data.pk;
        this.lambert93 = data.lambert93 ? new PointDto(data.lambert93) : undefined;
        this.wgs84 = data.wgs84 ? new PointDto(data.wgs84) : undefined;
        this.commune = data.commune;
        this.departement = data.departement;
        this.coordonneesGeographiques = data.coordonneesGeographiques ? new PointDto(data.coordonneesGeographiques) : undefined;
        this.tgv = (this.libelle || '').toLowerCase().indexOf('tgv') >= 0;
    }
}
