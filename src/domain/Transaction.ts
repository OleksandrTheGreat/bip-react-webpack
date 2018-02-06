import { Account } from './Account';
import { Currency } from './Currency';
import { Entity } from './Entity';
import { Marker } from './Marker';

export class Transaction  extends Entity {
  constructor(
    id: AAGUID,
    public fromAccountId: AAGUID,
    public toAccountId: AAGUID,
    public sumFrom: number,
    public sumTo: number,
    public rate: number = null,
    public description: string = null,
    public markerId: AAGUID = null,
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
