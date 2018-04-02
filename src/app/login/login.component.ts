import { Component, OnInit } from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import {LoginService} from '../login.service';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/retry';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  username: string;
  password: string;

	constructor (private loginService: LoginService) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }
  
  onlogin()
  {
    this.loginService.postCredentials(this.username, this.password).retry(2).subscribe(
      data => 
      {
         this.loggedIn=true;
         localStorage.setItem('PortalAdminHasLoggedIn', 'true');
         location.reload();
       }, 
      (err:HttpErrorResponse)=>{  
        if(err.error instanceof Error){
          //A client-side or network error occurred.	
          console.log('An error occurred:', err.error.message);
        }else{
           //Backend returns unsuccessful response codes such as 404, 500 etc.				 
           console.log('Backend returned status code: ', err.status);
           console.log('Response body:', err.error);
        }
     })
  }
  ngOnInit() {
  }


 /* onSubmit() {
    console.log(this.username);
    console.log(this.password);
   // this.loggedIn=true;
    console.log(this.loggedIn);
    this.loginService.sendCredential(this.username, this.password) .subscribe(
      data => 
      {
        this.loggedIn=true;
        localStorage.setItem('PortalAdminHasLoggedIn', 'true');
       // location.reload();
          console.log("POST call successful value returned in body",   );
      }, 
     (response:any) => {
          console.log(" the was POST call in error", response);
          console.log('HTTP response', response);
          console.log('HTTP response : Headers', response.headers);
          console.log('HTTP response : status', response.status);
          console.log('HTTP response : url', response.url);
          // Note that we don't need parse the response, we can access
          // it directly through 'body' property
          console.log('HTTP response : body', response.body);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
   /* this.loginService.sendCredential(this.username, this.password).subscribe((data: any) => {
        this.loggedIn=true;
         localStorage.setItem('PortalAdminHasLoggedIn', 'true');
        location.reload();
      },
      (err: HttpErrorResponse) => console.log(err)
    );
    console.log(this.loggedIn);
  
  }*/
}
