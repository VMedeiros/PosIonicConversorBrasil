export class ExchangeHouse {
    public lat: number;
    public long: number;
    public name: string;
    public address: string;
    public rating: number;

    constructor(public latitude: number,
                public longitude: number,
                public name_: string,
                public address_: string,
                public rating_: number,) {
        this.lat = latitude;
        this.long = longitude;
        this.name = name_;
        this.address = address_;
        this.rating = rating_;
    }
}