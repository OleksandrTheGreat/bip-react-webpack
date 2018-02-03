import {Currency} from './Currency';
import { Entity } from './Entity';

export class Account extends Entity {
  constructor(
    id: AAGUID,
    public name: string,
    public currencyId: AAGUID,
    public balance: number = 0,
    public description: string = null,
    public showOnHomePage: boolean = false,
    public displayOrder: number = 0,
    public useInBalance: boolean = true
  ) {
    super(id);
  }
}
