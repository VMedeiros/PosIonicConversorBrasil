import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {MAPS_KEY} from "../../../private_keys";
import {ExchangeHouse} from "../../models/ExchangeHouse";

/*
  Generated class for the MapsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MapsServiceProvider {

    constructor(public http: Http) {
    }

    getNearbyExchangeHouses(latitude: number, longitude: number) {
        console.log('DENTRO DO SERVICE');
        let mapsUri = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${MAPS_KEY}&location=${latitude},${longitude}&radius=50000&types=finance`;
        console.log('VOU CHAMAR', mapsUri);
        return this.http.get(mapsUri).map((result) => {
            let list = [];
            list = <ExchangeHouse[]>(result.json().results.map((r) => new ExchangeHouse(r.geometry.location.lat,
                r.geometry.location.lng, r.name, r.vicinity, r.rating)));
            console.log('RESULT SERVICE', list);
            return list;
        });
    }

}
