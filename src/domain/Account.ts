import { Currency } from './Currency';

export class Account {
  constructor(
    public id: string,
    public name: string,
    public currencyId: string,
    public balance: number,
    public desctiption: string = null,
    public showOnHomePage: boolean = false,
    public useInBalance: boolean = true,
    public isDeleted: boolean = false
  ) {
  }
}
