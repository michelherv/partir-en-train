import { AbstractDto } from './abstract.dto';


export class PointDto extends AbstractDto {
    public x: number;
    public y: number;

    constructor(data?: any) {
        super(data);

        data = data || {};
        this.x = data.x;
        this.y = data.y;
    }
}
