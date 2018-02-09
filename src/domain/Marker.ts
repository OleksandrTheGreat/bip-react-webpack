import { Entity } from "./Entity";

export enum MarkerCategory {
  Expense = 0,
  Income
}

export class Marker extends Entity {

  constructor(
    id: AAGUID,
    public category: MarkerCategory,
    public name: string,
    isDeleted?: boolean,
    createdDateTime?: Date,
    modifiedDateTime?: Date
  ) {
    super(
      id,
      isDeleted,
      createdDateTime,
      modifiedDateTime
    );
  }
}
