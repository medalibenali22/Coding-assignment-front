import { Transaction } from "./transaction-model";

export class Account {
    id!: number;
    balance!: number;
    transaction: Transaction[] = [];
    
}

