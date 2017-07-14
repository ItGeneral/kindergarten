import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBackSystemComponent } from './app-back-system.component';
import {RouterModule} from "@angular/router";
import {appBackSystemRoutes} from "./app-back-system.route";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appBackSystemRoutes),
  ],
  declarations: [AppBackSystemComponent],
  bootstrap: [AppBackSystemComponent]
})
export class AppBackSystemModule { }
