import { Component, OnInit } from '@angular/core';
import {User} from "../../util/model/user-model";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
import {environment} from "../../../environments/environment";
import {SysBaseInfo} from "../../util/model/sys-base-info-model";

@Component({
  selector: 'app-user-register',
  templateUrl: 'user-register.component.html',
  styleUrls: ['user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user:User = new User();

  private subject: Subject<User> = new Subject<User>();

  /** 基本信息 */
  private sysBaseInfo = new SysBaseInfo();

  private errMsg:string;

  public headers = new Headers({'Content-Type': 'application/json'});

  constructor(public router: Router, public http: Http){}

  ngOnInit() {
    this.getSchoolBaseInfo();
  }

  /**
   * 注册
   */
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

  /**
   * 获取基本信息
   */
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
