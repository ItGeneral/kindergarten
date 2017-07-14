/**
 * @Author SongJiuHua
 * Created on 2017/1/23
 * @Description 路由配置
 */

import {Routes} from '@angular/router';
import {AppBackSystemComponent} from "./app-back-system.component";

//loadChildren实现懒加载
//canActive 路由守卫， 如下所示，添加canActivate后，HomeComponent就被设置了访问权限
export const appBackSystemRoutes: Routes = [
  {path : '', redirectTo:'app-back-system', pathMatch:'full'},
  {path : 'app-back-system', component : AppBackSystemComponent}
];
