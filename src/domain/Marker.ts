export enum MarkerCategory {
  account = 0,
  transaction = 1
}

export class Marker {
  constructor(
    id: string,
    category: MarkerCategory,
    name: string,
    isDeleted: boolean = false
  ) {}
}
