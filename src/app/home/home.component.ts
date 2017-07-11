import { Component, OnInit } from '@angular/core';
import {HttpService} from "../service/http.service";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgModel]
})
export class HomeComponent implements OnInit {

  constructor(public httpService : HttpService){}
  /** 轮播图片 */
  public homeImgList : Array<any>;
  /** 简介 */
  public introduction : string;
  /** 师资介绍 */
  public teacherDesc : string;
  /** 校园文化 */
  public shcoolCal : string;
  /** 页脚信息 */
  public footMsg : Object;

  /**
   *  生命周期钩子  Angular提供了一些接口，用来介入组件生命周期的几个关键时间点：刚创建时、每次变化时，以及最终被销毁时。
   *  初始化加载时执行this.get()方法获取数据 http://localhost:8080/user
   */
  ngOnInit(): void {
      this.homeImgList = [
        "./assets/res/img/logo.jpg",
        "./assets/res/img/np.png",
        "./assets/res/img/icon.png",
        "./assets/res/img/icon.png"
      ]
    this.introduction = "购物英文Shopping，台湾人取其近音俗称“血拼”。指在零售商拣选或购买货品或服务的行为，可视为一种 经济和休闲活动。现在网络购物是一种潮流，大的像淘宝、京东，但是现代模式花样越来越多，以121店购物—分享—挣钱的模式为代表受到广大购物爱好者的喜爱。每个平台的模式都不一样。购即为买，物即为所出售之物品。无男女老幼之分，乃居家生活之必备！购物在不同的古代文明早已出现。在古罗马，图拉真市场（Trajan's Market）的taberna就是一种小零售商店，而在哈德良长城上发现罗马人为士兵而写的购物清单，历史可追溯至公元75至125年。";
    this.footMsg = {
      "telPhone" : "18801915767",
      "copyRight":"西师大幼儿园",
      "weChatImg" : "./assets/res/img/icon.png"
    }
    this.teacherDesc = "购物英文Shopping，台湾人取其近音俗称“血拼”。指在零售商拣选或购买货品或服务的行为，可视为一种 经济和休闲活动。现在网络购物是一种潮流，大的像淘宝、京东，但是现代模式花样越来越多，以121店购物—分享—挣钱的模式为代表受到广大购物爱好者的喜爱。每个平台的模式都不一样。购即为买，物即为所出售之物品。无男女老幼之分，乃居家生活之必备！购物在不同的古代文明早已出现。在古罗马，图拉真市场（Trajan's Market）的taberna就是一种小零售商店，而在哈德良长城上发现罗马人为士兵而写的购物清单，历史可追溯至公元75至125年。";
    this.shcoolCal = "购物英文Shopping，台湾人取其近音俗称“血拼”。指在零售商拣选或购买货品或服务的行为，可视为一种 经济和休闲活动。现在网络购物是一种潮流，大的像淘宝、京东，但是现代模式花样越来越多，以121店购物—分享—挣钱的模式为代表受到广大购物爱好者的喜爱。每个平台的模式都不一样。购即为买，物即为所出售之物品。无男女老幼之分，乃居家生活之必备！购物在不同的古代文明早已出现。在古罗马，图拉真市场（Trajan's Market）的taberna就是一种小零售商店，而在哈德良长城上发现罗马人为士兵而写的购物清单，历史可追溯至公元75至125年。";
  }

  testHttp(){
    //subscribe()订阅数据
    this.httpService.get("http://localhost:8080/test", null).subscribe(data => { });
  }

  search():void{
    console.log();
  }

}
