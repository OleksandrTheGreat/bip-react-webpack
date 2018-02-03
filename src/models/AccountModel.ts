import {state} from '../shared';

export class AccountModel {

  public get balanceView(): string {

    if (!this.balance === null || this.balance === undefined)
      return '';

    return this.balance.toLocaleString(
      state.i18n.locale, 
      {
        style: 'decimal',
        minimumFractionDigits: this.precision
      });
  }

  constructor(
    public id: AAGUID,
    public name: string,
    public balance: number = 0,
    public currencyId: AAGUID = null,
    public currencyName: string = null,
    public displayOrder: number = 0,
    public description: string = null,
    public precision: number = 2,
    public showOnHomePage: boolean = false
  ) {    
  }
}
