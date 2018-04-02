import { Component, OnInit } from '@angular/core';
import { TransactionList } from '../transactionList';
import { ActivatedRoute,Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-savings-transaction',
  templateUrl: './savings-transaction.component.html',
  styleUrls: ['./savings-transaction.component.css']
})
export class SavingsTransactionComponent implements OnInit {
  username:string;
	savingsTransactionList: TransactionList[];
 
  constructor(private route: ActivatedRoute, private userService: UserService) { 
    this.route.params.forEach((params: Params) => {
      this.username = params['username'];
    });
    this.getSavingsTransactionList();
  }
    getSavingsTransactionList() {
      this.userService.getSavingsTransactionList(this.username).retry(3).subscribe(
        res => {
          console.log(res);
              this.savingsTransactionList = res;
            },
            error => console.log(error)
      )
    }
  ngOnInit() {
  }

}
