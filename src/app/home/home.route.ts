import {HomeComponent} from "./home.component";
/**
 * Created by keven-song on 2017/3/4.
 */
export const homeRoutes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent}
];
