"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ArticleService = (function () {
    function ArticleService() {
        this.ARTICLES = [
            { Id: 1, Title: 'Angular 2 - Getting Started', Summary: 'In this article, you will learn how to start working with Angular 2.' },
            { Id: 2, Title: 'How to detect image Faces and make Blur using Cognitive Face API with .NET Core', Summary: 'In this article, you will learn how to detect total faces and image and make them Blur using Cognitive Face API with .NET Core.' },
            { Id: 3, Title: 'Getting Started With Microsoft Project 2016', Summary: 'In this article, you will learn how to getting started with Microsoft Project 2016 from scratch.' },
            { Id: 4, Title: 'Get Image Attributes using Cognitive Services face API in WPF', Summary: 'In this article you will learn how to get the image attributes like Age, Gender using Cognitive Services face API in WPF.' },
            { Id: 5, Title: 'Cognitive Services face API in WPF', Summary: 'In this article, I will explain how to use Cognitive Services face API in WPF.' }
        ];
    }
    return ArticleService;
}());
ArticleService = __decorate([
    core_1.Injectable()
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map