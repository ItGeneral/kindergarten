import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {userRoutes} from './user.routing';
import {RouterModule} from "@angular/router";
import {UserRegisterComponent} from "./user-register/user-register.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {FormsModule} from "@angular/forms";
import { UserResetComponent } from './user-reset/user-reset.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserRegisterComponent,
    UserLoginComponent,
    UserResetComponent
  ],
  exports:[UserRegisterComponent, UserLoginComponent] //declarations 的子集，可用于其它模块的组件模板。
})
export class UserModule { }
