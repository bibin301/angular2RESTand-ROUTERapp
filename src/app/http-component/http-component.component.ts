import { Component, OnInit } from '@angular/core';
//import {HttpService} from './http-service';
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'; 
// import { Injectable ,Component} from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/operator/map';
//  import {HttpService} from './http-service';
import {MyNewServiceService} from '../my-new-service.service'

@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.css'],
   providers: [MyNewServiceService],

})
export class HttpComponentComponent{

  dataProduct:any;


    
  


info = 'app works!';
  constructor(private newService:MyNewServiceService) {
    

   }


 


onTestGet(){
 

this.newService.getData().subscribe(
  (data) => this.dataProduct = data,
  (error) => alert (error),
  () => console.log('get detial success')
)


// alert("my function is working",);

// return  this._http.get(' http://headers.jsontest.com/')
//                   .map(response => response.json())
//                   .subscribe(result => this.result = result);



    // this._httpService.getCurrentTime().subscribe(
    //     data => {
    //       this.testResponse = data;
    //       console.log("I CANT SEE DATA HERE: ", this.testResponse);
    //     }
    // );







 }

}
