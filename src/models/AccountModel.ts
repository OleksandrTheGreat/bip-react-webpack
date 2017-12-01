export class AccountModel {

  constructor(
    public id: AAGUID,
    public name: string,
    public balance: string,
    public currency: string,
    public showOrder: number,
    public description: string
  ) {    
  }
}
