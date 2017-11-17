import { Account } from './Account';
import { Currency } from './Currency';
import { Entity } from './Entity';

export class Transaction  extends Entity {
  constructor(
    id: AAGUID,
    public fromAccountId: AAGUID,
    public toAccountId: AAGUID,
    public sumFrom: number,
    public sumTo: number,
    public rate: number = null,
    public description: string = null
  ) {
    super(id);
  }
}
