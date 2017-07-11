import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from "./about.component";
import {AboutCommentComponent} from "./about-comment/about-comment.component";
import {AboutArticleComponent} from "./about-article/about-article.component";
import {RouterModule} from "@angular/router";
import {aboutRoutes} from "./about.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [
    AboutComponent,
    AboutCommentComponent,
    AboutArticleComponent
  ]
})
export class AboutModule { }
