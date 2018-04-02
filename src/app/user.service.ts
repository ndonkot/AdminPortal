import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse ,HttpParams } from '@angular/common/http';
import {Observable}  from 'rxjs/Observable';
import { User } from './User';
import{Utilisateur} from './Utilisateur';
import{TransactionList} from './transactionList';
@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    let url = "http://localhost:8080/api/user/all";
    const httpOptions = {withCredentials:true};
  
    return this.httpClient.get<User[]>(url, httpOptions );
  }

  enableUser (username: string) {
    let url = "http://localhost:8080/api/user/"+username+"/enable";
    return this.httpClient.get(url, { withCredentials: true });
  }

  disableUser (username: string) {
    let url = "http://localhost:8080/api/user/"+username+"/disable";
    return this.httpClient.get(url, { withCredentials: true });
  }

  getPrimaryTransactionList(username: string):Observable<TransactionList[]> {
    let url = "http://localhost:8080/api/user/primary/transaction?username="+username;
   return this.httpClient.get<TransactionList[]>(url, { withCredentials: true });
  }

  getSavingsTransactionList(username: string):Observable<TransactionList[]> {
    let url = "http://localhost:8080/api/user/savings/transaction?username="+username;
   return this.httpClient.get<TransactionList[]>(url, { withCredentials: true });
  }

}
