import { Account } from "./Account";
import { Currency } from "./Currency";

export class Transaction {
  constructor(
    public id: string,
    public from: Account,
    public to: Account,
    public currency: Currency,
    public sum: number,
    public rate: number = null,
    public description: string = null,
    public isDeleted: boolean = false
  ) {}
}
