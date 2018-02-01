export class AccountModel {

  constructor(
    public id: AAGUID,
    public name: string,
    public balance: string = null,
    public currencyId: AAGUID = null,
    public currency: string = null,
    public showOrder: number = -1,
    public description: string = null
  ) {    
  }
}
