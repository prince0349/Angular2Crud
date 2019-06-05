"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "user-app",
        /*template: `
                     <div>
                         <nav class='navbar navbar-inverse'>
                             <div class='container-fluid'>
                                 <ul class='nav navbar-nav'>
                                     <li><a [routerLink]="['home']">Home</a></li>
                                     <li><a [routerLink]="['user']">Users Management</a></li>
                                     <li><a [routerLink]="['country']">Country</a></li>
                                     <li><a [routerLink]="['article']">Article</a></li>
                                 </ul>
                             </div>
                         </nav>
                         <div class='container'>
                             <router-outlet></router-outlet>
                         </div>
                      </div>
                     `*/
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/styles.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map