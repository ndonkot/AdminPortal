import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/retry';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed=true;
  loggedIn= false;
  
  constructor(private loginService: LoginService,private router : Router ) 
  {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) 
    {
      this.loggedIn=false;
     
    } else 
    {
      this.loggedIn = true;
     
    }
  }
 
	logout(){
    localStorage.setItem('PortalAdminHasLoggedIn', '');
		this.loginService.logoutS().retry(2).subscribe(
      (response)  => {
        //console.log("POST call successful logtout value returned in body",   );
       localStorage.setItem('PortalAdminHasLoggedIn', '');
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
     }
			);
  	location.reload();

 this.router.navigate(['/login']);
  
	}
  getDisplay() {
    
    if(!this.loggedIn){
     
      return "none";
    } else {
      
      return "inline";
    }
  }

  ngOnInit() {
   
  }

}
