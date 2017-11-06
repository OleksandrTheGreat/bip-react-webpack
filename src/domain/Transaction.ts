import { Account } from "./Account";
import { Currency } from "./Currency";

export class Transaction {
  constructor(
    id: string,
    from: Account,
    to: Account,
    currency: Currency,
    sum: number,
    rate: number = null,
    description: string = null,
    isDeleted: boolean = false
  ) {}
}
