export enum MarkerCategory {
  account = 0,
  transaction,
  currency
}

export class Marker {
  constructor(
    public id: Guid,
    public category: MarkerCategory,
    public name: string,
    public isDeleted: boolean = false
  ) {
  }
}
