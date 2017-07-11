/**
 * @Author SongJiuHua
 * Created on 2017/2/19
 * @Description httpService
 */
import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptions, URLSearchParams, Jsonp} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {Params} from "../util/app.params.component";

// providers: [HttpService]，providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个Service的新实例
@Injectable()
export class HttpService{

  constructor(private http: Http, private jsonp : Jsonp) {}

  private headers = new Headers({'Content-Type': 'application/json'});

  private options = new RequestOptions();

  /**
   * 设置参数
   * @param param
   */
  setParams(param: Params[]){
    let params = new URLSearchParams();
    if(param != null){
      for(var i = 0; i < param.length; i++){
        params.set(param[i].key, param[i].value);
      }
    }
    this.options = new RequestOptions({ headers: this.headers, search : params });
  }

  /**
   * Jsonp请求设置参数
   * @param term
   * @param param
   */
  setJsonpParams(term: string, param: Params[]){
    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    if(param != null){
      for(var i = 0; i < param.length; i++){
        params.set(param[i].key, param[i].value);
      }
    }
    this.options = new RequestOptions({ headers: this.headers, search : params });
  }

  /**
   * 获取数据
   * @returns {Promise<TResult|T>}
   */
  /*gets(url:string, param: Params[]):Promise<Object>{
    this.setParams(param);
    return this.http.get(url)  //http.get返回一个 RxJS 的Observable对象, this.options
      .toPromise()  //toPromise操作符把Observable直接转换成Promise对象
      .then(response => response.json().data as Object[]) //在 promise 的then回调中，我们调用 HTTP 的Reponse对象的json方法，以提取出其中的数据。
      .catch(this.handleError);
  }*/

  /**
   * 添加数据
   * @param name
   * @returns {Observable<R>}
   */
  postObject (url:string, param: Params[]): Observable<Object> {
    this.setParams(param);
    return this.http.post(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * 删除数据
   * @param obj
   * @returns {Promise<TResult|T>}
   */
  delete(url:string, param: Params[]):Observable<Object[]>{
    this.setParams(param);
    return this.http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * 获取数据
   * @returns {Observable<R>}
   */
  get(url:string, param: Params[]): Observable<Object[]> {
    this.setParams(param);
    return this.http.get(url)//this.options
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * 更新数据
   * @param obj
   * @returns {Promise<TResult|T>}
   */
  put(url:string, param: Params[]): Observable<Object>{
    this.setParams(param);
    return this.http.put(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * 跨域请求
   * @param term
   * @returns {Observable<R>}
   */
  getJsonp(url : string, term : string, param: Params[]): Observable<Object>{
    this.setJsonpParams(term, param);
    return this.jsonp.get(url, this.options)
      .map(response => <String[]> response.json())
      .catch(this.handleError);
  }

  /**
   * 处理响应对象，解析成json
   * @param res
   * @returns {string|TaskData|Observable<Data>|any|Data|ArrayBuffer}
   */
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  /**
   * 异常处理
   * @param error
   * @returns {any}
   */
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
