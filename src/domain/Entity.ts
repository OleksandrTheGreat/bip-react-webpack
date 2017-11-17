export abstract class Entity {
  createdDateTime: Date;
  modifyDateTime: Date;
  isDeleted: boolean;

  constructor(
    public id: AAGUID
  ) {}
}