import { Entity } from "./Entity";

export enum MarkerCategory {
  account = 0,
  transaction,
  currency
}

export class Marker  extends Entity {
  constructor(
    id: AAGUID,
    public category: MarkerCategory,
    public name: string
  ) {
    super(id);
  }
}
