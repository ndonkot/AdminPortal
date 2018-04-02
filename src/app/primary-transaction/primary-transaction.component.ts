import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { UserService } from '../user.service';
import { TransactionList } from '../transactionList';

@Component({
  selector: 'app-primary-transaction',
  templateUrl: './primary-transaction.component.html',
  styleUrls: ['./primary-transaction.component.css']
})
export class PrimaryTransactionComponent implements OnInit {
  username:string;
	primaryTransactionList: TransactionList[];

  constructor(private route: ActivatedRoute, private userService: UserService) { 
    this.route.params.forEach((params: Params) => {
      this.username = params['username'];
    });

    this.getPrimaryTransactionList();
  }

  getPrimaryTransactionList() {
		this.userService.getPrimaryTransactionList(this.username).retry(3).subscribe(
			res => {
				    console.log(res);
        		this.primaryTransactionList = res;
      		},
      		error => console.log(error)
		)
	}
  ngOnInit() {
  }

}
