import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {UserModule} from "./user/user.module";
import {AboutModule} from "./about/about.module";
import {HomeModule} from "./home/home.module";
import {appRouting} from "./app.routing";
import {HttpService} from "./service/http.service";
import {OrderModule} from "./order/order.module";
import {PhotoModule} from "./photo/photo.module";
import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    appRouting,
    HomeModule,
    AboutModule,
    UserModule,
    OrderModule,
    PhotoModule,
    ToastModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
