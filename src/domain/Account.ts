import {Currency} from './Currency';

export class Account {
  constructor(
    public id: Guid,
    public name: string,
    public currencyId: Guid,
    public balance: number,
    public desctiption: string = null,
    public showOnHomePage: boolean = false,
    public useInBalance: boolean = true,
    public isDeleted: boolean = false
  ) {
  }
}
