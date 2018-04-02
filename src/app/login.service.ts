import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse ,HttpParams } from '@angular/common/http';
import {Observable}  from 'rxjs/Observable';
import { HtmlParser } from '@angular/compiler';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) 
  {
  }
  postCredentials(username: string, password: string)
  {
      
    let httpHeaders=new HttpHeaders().set('Content-Type','text/html; charset=utf-8');
    let httpParams= new HttpParams().set('username', username) .set('password', password );
    const httpOptions = {
      httpHeaders,
      responseType:'text' as 'json',
      withCredentials:true
    };
    return this.httpClient.post<Response>("http://localhost:8080/index",httpParams,httpOptions);
  }
  logoutS()
  {
    
    const httpOptions = {
     
      responseType: 'text' as 'json',
      withCredentials: true,
     };
    
    return this.httpClient.get<Response>("http://localhost:8080/logout",httpOptions);
  }

}
