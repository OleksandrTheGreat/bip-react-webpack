import { Account } from './Account';
import { Currency } from './Currency';

export class Transaction {
  constructor(
    public id: Guid,
    public fromAccountId: Guid,
    public toAccountId: Guid,
    public currencyId: Guid,
    public sum: number,
    public rate: number = null,
    public description: string = null,
    public isDeleted: boolean = false
  ) {
  }
}
