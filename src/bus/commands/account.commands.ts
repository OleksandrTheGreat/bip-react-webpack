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

export class SaveAccount {
  constructor(
    public account: AccountModel,
    public onSuccess: () => void,
    public onError: (error: any) => void
  ){}
}

export class DeleteAccount {
  constructor(
    public id: AAGUID,
    public onSuccess: () => void,
    public onError: (error: any) => void
  ){}
}

export class ResoreAccount {
  constructor(
    public id: AAGUID,
    public onSuccess: () => void,
    public onError: (error: any) => void
  ){}
}

export class RefreshAccountsListPage {
}
