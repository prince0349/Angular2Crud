import { Component } from "@angular/core"

@Component({
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

export class AppComponent {

}