import { Entity } from "./Entity";

export class Currency  extends Entity {
  constructor(
    id: AAGUID,
    public name: string,
    public precision: number = 2,
    public description: string= null,
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
