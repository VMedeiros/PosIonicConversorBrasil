import {Component} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation';
import {IonicPage, NavController} from 'ionic-angular';
import {MapsServiceProvider} from "../../providers/maps-service/maps-service";

@IonicPage()
@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage {


    lat: number = 0.0;
    long: number = 0.0;

    // todo: popular com os outros marcadores
    currentResults = [{
        lat: -7.2282844,
        long: -35.8880261,
        name: 'Modeo Tour',
        address: ''
    }];

    map = {
        latitude: 0.0,
        longitude: 0.0,
        zoom: 15
    };

    constructor(public navCtrl: NavController,
                public geolocation: Geolocation,
                public mapsService: MapsServiceProvider,
                /*private toastService: ToastServiceProvider,
                private loadingService: LoadingServiceProvider*/) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MapPage');
    }

    ngOnInit(): void {
        this.getCurrentPosition();
    }

    getCurrentPosition() {
        // let progressLoader = this.loadingService.buildLoading('Calculating your position...', true);
        // progressLoader.present();
        this.geolocation.getCurrentPosition({enableHighAccuracy: true})
            .then((result) => {
                this.lat = result.coords.latitude;
                this.long = result.coords.longitude;
                // this.map.latitude = result.coords.latitude;
                // this.map.longitude = result.coords.longitude;
                this.map.zoom = 15;
                // this.toastService.showToast('Position found!', 3000);
                // progressLoader.dismiss();
                // this.getNearbyExchangeHouses();
            })
            .catch((error) => {
                console.log('Something went wrong! ' + error.message);
                // this.toastService.showToast('Something went wrong! ' + error.message, 3000);
                // progressLoader.dismiss();
            });
    }

    getNearbyExchangeHouses() {
        console.log('AQUI !');
        this.mapsService.getNearbyExchangeHouses(this.lat, this.long).subscribe((result => {
            if (result.length > 0) {
                console.log('RESULT MAP', result);
                this.currentResults = result;
                // create markers
            } else {
                console.log('no results');
                // this.toastService.showToast('There is no image for the given date.', 3000);
            }
            // nasaLoader.dismiss();
        }));
    }

    onMapClicked(event: MouseEvent) {
        const coords = (event as any).coords;
        // this.map.latitude = coords.lat;
        // this.map.longitude = coords.lng;
    }

}
