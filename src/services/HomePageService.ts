import { Account } from "../domain";
import { IIDBRepository } from "../IndexedDB/IDBRepository";
import { GUID } from "xtypescript";
import { IAccountMapper } from "./AccountMapper";
import { AccountModel } from "../models/index";

export abstract class IHomePageService {
  abstract getAccounts(): Promise<AccountModel[]>;
}

export class HomePageService implements IHomePageService {

  storageName = 'Account';

  constructor(
    private repository: IIDBRepository, 
    private mapper: IAccountMapper
  ){}

  getAccounts(): Promise<AccountModel[]> {
    return new Promise<AccountModel[]>((resolve, reject) => {

      this
      .repository
      .query<Account>(this.storageName, account => !account.isDeleted && account.showOnHomePage)
      .then(accounts => {

        let result = accounts.sort((a, b)=>{
          
          if(a.displayOrder > b.displayOrder)
            return 1;
          
          if(a.displayOrder < b.displayOrder)
            return -1;
          
          return 0;
        });

        this
          .mapper
          .toModelList(result)
          .then(models => resolve(models))
          .catch(e => reject(e));
      })
      .catch(e => reject(e));
    });
  }
}