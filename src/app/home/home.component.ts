import { Component, OnInit } from '@angular/core';
import {HttpService} from "../service/http.service";
import {NgModel} from "@angular/forms";
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";
import {SysBaseInfo} from "../util/model/sys-base-info-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgModel]
})
export class HomeComponent implements OnInit {

  constructor(public http : Http){}
  /** 轮播图片 */
  public homeImgList : Array<any>;
  /** 基本信息 */
  private sysBaseInfo = new SysBaseInfo();

  private weChatImg:string;

  /**
   *  生命周期钩子  Angular提供了一些接口，用来介入组件生命周期的几个关键时间点：刚创建时、每次变化时，以及最终被销毁时。
   */
  ngOnInit(): void {
    this.getSchoolBaseInfo();
    this.homeImgList = [
      "./assets/res/img/logo.jpg",
      "./assets/res/img/np.png",
      "./assets/res/img/icon.png",
      "./assets/res/img/icon.png"
    ]
    this.weChatImg = "./assets/res/img/icon.png";

  }

  public getSchoolBaseInfo(){
    this.http.get(environment.apiUrl + "getSchoolBaseInfo")
      .map(response => {
          let data = response.json();
          if (data.status == "200" && data.result != null) {
              this.sysBaseInfo = data.result;
          }
        }
      ).subscribe();
  }

}
