import { AbstractDto } from './abstract.dto';


export class TarifDto extends AbstractDto {
    public origine: string;
    public destination: string;
    public appelClasse2: number;
    public classe2: number;
    public classe1: number;
    public commentaire: string;

    constructor(data?: any) {
        super(data);

        data = data || {};
        this.origine = data.origine;
        this.destination = data.destination;
        this.appelClasse2 = data.appelClasse2;
        this.classe2 = data.classe2;
        this.classe1 = data.classe1;
        this.commentaire = data.commentaire;
    }
}
