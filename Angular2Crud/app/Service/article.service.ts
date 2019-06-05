import { Injectable } from '@angular/core';
import { Article } from '../model/article';

@Injectable()
export class ArticleService {
   ARTICLES: Article[] = [  
        { Id: 1, Title: 'Angular 2 - Getting Started', Summary: 'In this article, you will learn how to start working with Angular 2.' },  
        { Id: 2, Title: 'How to detect image Faces and make Blur using Cognitive Face API with .NET Core', Summary: 'In this article, you will learn how to detect total faces and image and make them Blur using Cognitive Face API with .NET Core.' },  
        { Id: 3, Title: 'Getting Started With Microsoft Project 2016', Summary: 'In this article, you will learn how to getting started with Microsoft Project 2016 from scratch.' },  
        { Id: 4, Title: 'Get Image Attributes using Cognitive Services face API in WPF', Summary: 'In this article you will learn how to get the image attributes like Age, Gender using Cognitive Services face API in WPF.' },  
        { Id: 5, Title: 'Cognitive Services face API in WPF', Summary: 'In this article, I will explain how to use Cognitive Services face API in WPF.' }  
        ];  
    }
