export class CurrencyModel {
  constructor(
    public id: AAGUID,
    public name: string,
    public precision: number = 2,
    public description: string= null,
    public isDeleted: boolean = false
  ) {
  }
}