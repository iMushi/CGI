import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class MapWidgetService {

  constructor(private http: Http) { }

  getMapData() {
    return this.http.get('assets/data/map.json')
      .map(res => res.json());
  }
}
