import { Account } from './Account';
import { Currency } from './Currency';

export class Transaction {
  constructor(
    public id: string,
    public fromAccountId: string,
    public toAccountId: string,
    public currencyId: string,
    public sum: number,
    public rate: number = null,
    public description: string = null,
    public isDeleted: boolean = false
  ) {
  }
}
