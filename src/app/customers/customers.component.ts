import { Component, OnInit } from '@angular/core';
import { AccountDto } from '../shared/models-dto/AccountDto';
import { Customer } from '../shared/models/customer-model';
import { CustomersService } from '../shared/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(public customersService:CustomersService) { }

  customers : Customer[] =[];
  accountDto: AccountDto = new AccountDto ;

  ngOnInit(): void {
    this.customersService.getAll().subscribe((data)=> 
    {
      this.customers = data;

      console.log(this.customers);
    })
  }


  createAccount(id : number)
  {
    
    var entredInitialCredit = prompt("accoutn intial credit", "0");
    console.log(entredInitialCredit);
    this.accountDto.costumerId = id;
    this.accountDto.initialCredit = +entredInitialCredit!;

    this.customersService.CreateAccount(this.accountDto).subscribe((data)=>
      {

        console.log(data);
      }
    );

  }

}
