import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AbstractDto } from '../objects';


export abstract class AbstractService<T extends AbstractDto> {
    protected http: Http;
    protected url: string;
    protected factory: { new(data): T; }

    constructor(url: string, factory: { new(data): T; }, http: Http) {
        this.url = '176.138.213.161:8080' + url;
        this.factory = factory;
        this.http = http;
    }

    public getBy(filter: object): Observable<T[]> {
        return this.http
            .get(this.url, {
                search: Object.keys(filter).map(key => `${key}=${filter[key]}`).join(`&`)
            })
            .map(response => response.json())
            .map(items => items.map(item => new this.factory(item)))
            .catch((error: any, observable: Observable<T>) => {
                return Observable.throw(error);
            });
    }
}
