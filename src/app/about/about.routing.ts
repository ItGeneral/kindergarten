/**
 * @Author SongJiuHua
 * Created on 2017/1/24
 * @Description
 */
import {AboutComponent} from "./about.component";
import {AboutCommentComponent} from "./about-comment/about-comment.component";
import {AboutArticleComponent} from "./about-article/about-article.component";

export const aboutRoutes = [
  {
    path : '',
    component : AboutComponent,
    children : [
      {path: '', redirectTo: '', pathMatch: 'full'},
      {path: 'comment', component: AboutCommentComponent},
      {path: 'article', component: AboutArticleComponent}
    ]
  }
];
