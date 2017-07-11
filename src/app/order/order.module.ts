import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from "./order.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {orderRouting} from "./order.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    orderRouting,
  ],
  declarations: [OrderComponent],
  bootstrap: [OrderComponent]
})
export class OrderModule { }
