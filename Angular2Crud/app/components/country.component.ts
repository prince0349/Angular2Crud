import { Component } from '@angular/core';
import { CountryService } from '../Service/country.service';
import { Country } from '../model/country';
import { State } from '../model/state';

@Component({
    selector: 'country-component',
    templateUrl: 'app/components/countrycomponent.html',
    providers: [CountryService]
})
export class CountryComponent {
    selectedCountry: Country = new Country(0, 'India');
    countries: Country[];
    states: State[];

    constructor(private _countryService: CountryService) {
        this.countries = this._countryService.getCountries();
    }

    onSelect(countryid) {
        this.states = this._countryService.getStates().filter((item) => item.countryid == countryid);
    }
}
