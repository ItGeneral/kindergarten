/**
 * @Author SongJiuHua
 * Created on 2017/1/23
 * @Description 路由配置
 */

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {OrderComponent} from "./order.component";


//loadChildren实现懒加载
//canActive 路由守卫， 如下所示，添加canActivate后，HomeComponent就被设置了访问权限
const orderRoutes: Routes = [
  {path : '', redirectTo:'myOrder', pathMatch:'full'},
  {path : 'myOrder', component: OrderComponent}
];

export const orderRouting:ModuleWithProviders  = RouterModule.forRoot(orderRoutes);
