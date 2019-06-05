"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var home_component_1 = require("./components/home.component");
var country_component_1 = require("./components/country.component");
var article_component_1 = require("./components/article.component");
var admin_component_1 = require("./components/admin.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'country', component: country_component_1.CountryComponent },
    { path: 'article', component: article_component_1.ArticleComponent },
    { path: 'admin', component: admin_component_1.AdminComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map