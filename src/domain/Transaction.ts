import { Account } from './Account';
import { Currency } from './Currency';

export class Transaction {
  constructor(
    public id: AAGUID,
    public fromAccountId: AAGUID,
    public toAccountId: AAGUID,
    public currencyId: AAGUID,
    public sum: number,
    public rate: number = null,
    public description: string = null,
    public isDeleted: boolean = false
  ) {
  }
}
