import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

@Injectable()
export class Next5Service {


  private _next5Url = 'http://next5api20180107093126.azurewebsites.net/api/next5'

  constructor(private _http: HttpClient) { }

  getNext5s(): Observable<any> {
    return this._http.get(this._next5Url)
                .do(data => console.log('all: ' + JSON.stringify(data)))
                .catch(this.handleError)
  }
  private handleError(err: HttpErrorResponse){
    console.log(err.message)
    return Observable.throw(err.message)
  }
//http://localhost:57160/api/Next5

}
