import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Customer } from "../models/customer-model";
import { AccountDto } from "../models-dto/AccountDto";
   

@Injectable({
    providedIn: 'root'
  })
  export class CustomersService {

    private apiUrl = "http://localhost:8080";

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
       
      constructor(private httpClient: HttpClient) { }

      getAll():Observable<Customer[]> {

        return this.httpClient.get<Customer[]>(this.apiUrl + '/customers');
      }

      CreateAccount(accountDto : AccountDto){

        return this.httpClient.post(this.apiUrl + '/account/add',accountDto)
      }
  }
      