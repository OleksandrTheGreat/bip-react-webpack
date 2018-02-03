export abstract class Entity {
  
  constructor(
    public id: AAGUID,
    public isDeleted: boolean = false,
    public createdDateTime: Date = new Date(),
    public modifiedDateTime: Date = new Date()
  ) {}
}