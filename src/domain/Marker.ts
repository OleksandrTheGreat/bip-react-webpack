import { Entity } from "./Entity";

export enum MarkerCategory {
  expense = 0,
  income
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
