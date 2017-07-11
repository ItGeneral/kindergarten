import { Component, OnInit } from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers:[NgModel]
})
export class PhotoComponent implements OnInit {

  constructor() { }
  /** 相册 */
  public photoAlbumList : Array<Object>;
  /** 相片 */
  public photographList : Array<string>;
  /** 判断是否显示相片 */
  public showGraph : boolean;

  public showGraphBanner : boolean;

  public showVideoBanner : boolean;

  ngOnInit() {
    this.photoAlbumList = [
      {
        "img" : "./assets/res/img/logo.jpg",
        "name" : "六一活动",
        "count" : 10
      },
      {
        "img" : "./assets/res/img/bg.png",
        "name" : "端午活动",
        "count" : 20
      },
      {
        "img" : "./assets/res/img/icon.png",
        "name" : "中秋活动",
        "count" : 30
      }
    ];
    this.photographList = [
      "./assets/res/img/logo.jpg",
      "./assets/res/img/bg.png",
      "./assets/res/img/icon.png",
    ];
    this.showGraph = false;
    this.showGraphBanner = true;
    this.showVideoBanner = false;
  }

}
