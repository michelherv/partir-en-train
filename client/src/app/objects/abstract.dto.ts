export class AbstractDto {
    public enabled: boolean;
    public selected: boolean;

    constructor(data?: any) {
        data = data || {};
        this.enabled = !!data.enabled;
        this.selected = !!data.selected;
    }
}
