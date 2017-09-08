/**
 * @Author SongJiuHua
 * Created on 2017/1/23
 * @Description 路由配置
 */

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from "./service/auth.guard";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {AppComponent} from "./app.component";
import {PhotoComponent} from "./photo/photo.component";

/*loadChildren实现懒加载
canActive 路由守卫， 如下所示，添加canActivate后，HomeComponent就被设置了访问权限*/
const appRoutes: Routes = [
  {path : '', redirectTo: 'app', pathMatch: 'full'},
  {path : 'app', component: AppComponent},
  {path : 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path : 'photo', component: PhotoComponent},
  {path : 'register', component: UserRegisterComponent},
  {path : 'login', component: UserLoginComponent},
  {path : 'myOrder', loadChildren: './order/order.module#OrderModule'},
  {path : 'about', loadChildren: './about/about.module#AboutModule'} /*懒加载*/
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
