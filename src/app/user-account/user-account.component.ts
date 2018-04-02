import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { User } from '../User';
import { SavingsAccount } from '../SavingsAccount';
import { PrimaryAccount } from '../PrimaryAccount';

import { uSavingsAccount } from '../uSavingsAccount';
import { uPrimaryAccount } from '../uPrimaryAccount';
import 'rxjs/add/operator/retry';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  //savingsAccount: SavingsAccount[];
  //primaryAccount: PrimaryAccount[];
  userList: User[];
	utilisateurListe: Utilisateur[]
	constructor(private userService: UserService, private router: Router ) {
		this.getUsers();
	}

	getUsers() {
    
		this.userService.getUsers().retry(3).subscribe(
      res => 
      {
            this.userList =res; 
           // this.utilisateurListe=res;
            console.log(this.userList);
      },
      		error => console.log(error)
		)
  }
  onSelectPrimary(username: string) {
    this.router.navigate(['/primaryTransaction', username]);
  }	

  onSelectSavings(username: string) {
    this.router.navigate(['/savingsTransaction', username]);
  }	

  enableUser(username: string) {
    this.userService.enableUser(username).retry(3).subscribe();
    location.reload();
  }

  disableUser(username: string) {
    this.userService.disableUser(username).retry(3).subscribe();
    location.reload();
  }
/*
	onSelectPrimary(username: string) {
    	this.router.navigate(['/primaryTransaction', username]);
  	}	

  	onSelectSavings(username: string) {
    	this.router.navigate(['/savingsTransaction', username]);
  	}	

  	enableUser(username: string) {
  		this.userService.enableUser(username).subscribe();
  		location.reload();
  	}

  	disableUser(username: string) {
  		this.userService.disableUser(username).subscribe();
  		location.reload();
  	}
*/


  ngOnInit() {
  }

}
