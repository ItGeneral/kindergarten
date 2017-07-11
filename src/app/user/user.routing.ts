/**
 * @Author SongJiuHua
 * Created on 2017/1/24
 * @Description 用户路由
 */

import {UserRegisterComponent} from "./user-register/user-register.component";
import {UserLoginComponent} from "./user-login/user-login.component";

export const userRoutes = [

  {path : '', redirectTo : 'login', pathMatch: 'full'},
  {path : 'login', component: UserLoginComponent},
  {path : 'register', component: UserRegisterComponent}
];

