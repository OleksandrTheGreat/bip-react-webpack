export class TransactionModel {
  constructor(
    public id: AAGUID = null,
    public fromAccountId: AAGUID = null,
    public toAccountId: AAGUID = null,
    public sumFrom: number = null,
    public sumTo: number = null,
    public rate: number = null,
    public description: string = null,
    public markerId: AAGUID = null,
    public isDeleted: boolean = false,
    public createdDateTime: Date = null
  ) {}
}
