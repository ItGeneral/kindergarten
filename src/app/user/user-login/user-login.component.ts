import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {User} from "../../util/model/user-model";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-user-login',
  templateUrl: 'user-login.component.html',
  styleUrls: ['user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public router: Router, public http:Http){}

  private subject: Subject<User> = new Subject<User>();

  private user:User = new User();

  private errMsg:string;

  private file1:File;

  public get currentUser():Observable<User>{
    return this.subject.asObservable();
  }


  ngOnInit() {

  }

  /**
   * 登录
   * subscribe 异步处理 如果需要用返回的数据，最好把方法写在里面。
   */
  public login(){
    this.http.get(environment.apiUrl + "login?userName=" + this.user.userName + "&password=" + this.user.password + "&rememberMe=" + this.user.rememberMe)
      .map(response => {
        let data = response.json();
        if(data["status"] == "200"){
          localStorage.setItem("currentUser",JSON.stringify(this.user));
          this.subject.next(Object.assign({},this.user));
          //跳转到home首页
          this.router.navigateByUrl("/");
        }else{
          this.errMsg = data["message"]
        }
      }).subscribe(
        data => {
          console.log("login success>");
        },
        error => {
          console.error(error);
        }
    );

  }

  public logout():void{
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }

}
