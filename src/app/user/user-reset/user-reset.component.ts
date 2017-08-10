import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {SysBaseInfo} from "../../util/model/sys-base-info-model";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {User} from "../../util/model/user-model";

@Component({
  selector: 'app-user-reset',
  templateUrl: './user-reset.component.html',
  styleUrls: ['./user-reset.component.css']
})
export class UserResetComponent implements OnInit {

  /** 基本信息 */
  private sysBaseInfo = new SysBaseInfo();

  public user:User = new User();

  constructor(public router: Router, public http: Http){}

  ngOnInit() {
    this.getSchoolBaseInfo();
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

  public resetPass():void{
    if(this.user.password != this.user.confirmPassword){
      //this.errMsg = "两次密码输入必须一样";
      return ;
    }
}

}
