import {Account} from "../../domain/Account";
import {AccountModel} from "../../models/AccountModel";

export class QueryDashboardAccounts {
  constructor(
    public onSuccess: (accounts: AccountModel[]) => void,
    public onError: (error: any) => void
  ) {}
}

export class QueryAccountList {
  constructor(
    public onSuccess: (accounts: AccountModel[]) => void,
    public onError: (error: any) => void
  ) {}
}
