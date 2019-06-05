"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var country_1 = require("../model/country");
var state_1 = require("../model/state");
var CountryService = (function () {
    function CountryService() {
    }
    CountryService.prototype.getCountries = function () {
        return [
            new country_1.Country(1, 'United States'),
            new country_1.Country(2, 'India'),
            new country_1.Country(3, 'Australia'),
            new country_1.Country(4, 'New Zealand'),
            new country_1.Country(5, 'South Africa'),
            new country_1.Country(6, 'United Kingdom')
        ];
    };
    CountryService.prototype.getStates = function () {
        return [
            new state_1.State(1, 1, 'Alabama'),
            new state_1.State(2, 1, 'Alaska'),
            new state_1.State(3, 1, 'Arizona'),
            new state_1.State(5, 1, 'Arkansas'),
            new state_1.State(6, 1, 'California'),
            new state_1.State(7, 1, 'Colorado'),
            new state_1.State(8, 1, 'Connecticut'),
            new state_1.State(9, 1, 'Delaware'),
            new state_1.State(10, 1, 'Florida'),
            new state_1.State(11, 1, 'Georgia'),
            new state_1.State(12, 1, 'Hawaii'),
            new state_1.State(13, 1, 'Idaho'),
            new state_1.State(14, 1, 'Illinois'),
            new state_1.State(15, 1, 'Indiana'),
            new state_1.State(16, 2, 'New Delhi'),
            new state_1.State(17, 2, 'Maharashtra'),
            new state_1.State(18, 2, 'Goa'),
            new state_1.State(19, 2, 'Punjab'),
            new state_1.State(20, 2, 'Haryana'),
            new state_1.State(21, 2, 'Uttar Pradesh'),
            new state_1.State(22, 2, 'Rajasthan'),
            new state_1.State(23, 2, 'Andhra Pradesh'),
            new state_1.State(24, 2, 'Jharkhand'),
            new state_1.State(25, 2, 'Madhya Pradesh'),
            new state_1.State(26, 3, 'New South Wales'),
            new state_1.State(27, 3, 'Tasmania'),
            new state_1.State(28, 3, 'Qweensland'),
            new state_1.State(29, 3, 'Western Australia'),
            new state_1.State(30, 3, 'Victoria'),
            new state_1.State(31, 4, 'Auckland'),
            new state_1.State(32, 4, 'Wellington'),
            new state_1.State(33, 4, 'Christchurch'),
            new state_1.State(34, 4, 'Hamilton'),
            new state_1.State(35, 4, 'Napier'),
            new state_1.State(31, 5, 'Eastern Cape'),
            new state_1.State(32, 5, 'Limpopo'),
            new state_1.State(33, 5, 'Mpumalanga'),
            new state_1.State(34, 5, 'North West'),
            new state_1.State(35, 5, 'Northern Cape'),
            new state_1.State(31, 6, 'Herefordshire'),
            new state_1.State(32, 6, 'Durham'),
            new state_1.State(33, 6, 'Manchester'),
            new state_1.State(34, 6, 'South Yorkshire'),
            new state_1.State(35, 6, 'Birmingham')
        ];
    };
    return CountryService;
}());
CountryService = __decorate([
    core_1.Injectable()
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map