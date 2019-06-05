import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { CountryComponent } from './components/country.component';
import { ArticleComponent } from './components/article.component';
import { AdminComponent } from './components/admin.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'country', component: CountryComponent },
    { path: 'article', component: ArticleComponent },
    { path: 'admin', component: AdminComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);