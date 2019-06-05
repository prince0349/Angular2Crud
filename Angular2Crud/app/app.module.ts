import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { CountryComponent } from './components/country.component';
import { ArticleComponent } from './components/article.component';
import { AdminComponent } from './components/admin.component';
import { UserService} from './Service/user.service'
import { CountryService} from './Service/country.service'
import { ArticleService} from './Service/article.service'
import { AdminService} from './Service/admin.service'

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [AppComponent, UserComponent, HomeComponent, CountryComponent, ArticleComponent, AdminComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService, CountryService, ArticleService, AdminService],
    bootstrap: [AppComponent]

})
export class AppModule { }
