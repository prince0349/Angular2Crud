import { Component } from '@angular/core';
import { ArticleService } from '../Service/article.service';
import { Article } from '../Model/Article';


@Component({
    selector: 'article-component',
    templateUrl: 'app/components/articlecomponent.html',
    providers: [ArticleService]
})
export class ArticleComponent {    
    articles: Article[];    

    constructor(private _articleService: ArticleService) {
        //this.articles = this._articleService.getCountries();
    }
}
