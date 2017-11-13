import {Currency} from './Currency';

export class Account {
  constructor(
    public id: Guid,
    public name: string,
    public currencyId: Guid,
    public balance: number,
    public desctiption: string = null,
    public showOnHomePage: boolean = true,
    public showOrder: number = 0,
    public useInBalance: boolean = true,
    public isDeleted: boolean = false
  ) {
  }
}
