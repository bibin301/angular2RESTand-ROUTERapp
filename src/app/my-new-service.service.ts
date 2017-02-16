import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/observable';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyNewServiceService {



  constructor(private http:Http) { 
    

  }
getData(){
//http://time.jsontest.com/
  return this.http.get('http://jsonplaceholder.typicode.com/posts').map(res=>res.json())

 


}



}
