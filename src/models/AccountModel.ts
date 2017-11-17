export class AccountModel {
  constructor(
    public id: AAGUID,
    public name: string,
    public balance: number,
    public currency: string,
    public showOrder: number
  ) {}
}
