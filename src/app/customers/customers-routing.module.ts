import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersComponent } from "./customers.component";
import { AddAccountComponent } from "./add-account/add-account.component";

const routes: Routes = [
    { path: 'customers', component: CustomersComponent},
    { path: 'customers/add-account', component: AddAccountComponent },
    
  ];
    
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CustomerRoutingModule { }