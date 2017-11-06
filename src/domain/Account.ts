import { Currency } from "./Currency";

export class Account {
  constructor(
    id: string,
    name: string,
    currency: Currency,
    desctiption: string = null,
    isDeleted: boolean = false
  ) {}
}
