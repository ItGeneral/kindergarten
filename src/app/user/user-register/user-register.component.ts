import { Component, OnInit } from '@angular/core';
import {User} from "../model/user-model";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
import {HttpService} from "app/service/http.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-user-register',
  templateUrl: 'user-register.component.html',
  styleUrls: ['user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user:User = new User();

  private subject: Subject<User> = new Subject<User>();

  private description:string;

  private errMsg:string;

  public headers = new Headers({'Content-Type': 'application/json'});

  constructor(public router: Router, public http: Http){}

  ngOnInit() {
    this.description = "购物英文Shopping，台湾人取其近音俗称“血拼”。指在零售商拣选或购买货品或服务的行为，可视为一种 经济和休闲活动。现在网络购物是一种潮流，大的像淘宝、京东，但是现代模式花样越来越多，以121店购物—分享—挣钱的模式为代表受到广大购物爱好者的喜爱。每个平台的模式都不一样。购即为买，物即为所出售之物品。无男女老幼之分，乃居家生活之必备！购物在不同的古代文明早已出现。在古罗马，图拉真市场（Trajan's Market）的taberna就是一种小零售商店，而在哈德良长城上发现罗马人为士兵而写的购物清单，历史可追溯至公元75至125年。"
  }

  public register(){
    if(this.user.password != this.user.confirmPassword){
      this.errMsg = "两次密码输入必须一样";
      return ;
    }
    this.http.post(environment.apiUrl + "register", JSON.stringify(this.user), new RequestOptions({headers : this.headers}))
      .map(response => {
        let data = response.json();
        if(data.status == "200"){
          this.subject.next(Object.assign({},this.user));
          //注册完成后跳转至登录页
          this.router.navigateByUrl("login");
        }else{
          this.errMsg = data.message;
        }
      }).subscribe();
  }

}
