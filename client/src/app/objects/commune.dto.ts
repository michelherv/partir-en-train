import { AbstractDto } from './abstract.dto';


export class CommuneDto extends AbstractDto {
    public libelle: string;

    constructor(data?: any) {
        super(data);

        data = data || {};
        this.libelle = data.libelle;
    }
}
