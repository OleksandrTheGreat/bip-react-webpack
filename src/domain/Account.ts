import {Currency} from './Currency';

export class Account {
  constructor(
    public id: Guid,
    public name: string,
    public currencyId: Guid,
    public balance: number = 0,
    public desctiption: string = null,
    public showOnHomePage: boolean = false,
    public showOrder: number = 0,
    public useInBalance: boolean = true,
    public isDeleted: boolean = false
  ) {
  }
}
