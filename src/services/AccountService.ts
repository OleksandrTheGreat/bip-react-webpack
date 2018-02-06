import {Account} from "../domain";
import {IIDBRepository} from "xIndexedDB";
import {GUID} from "xtypescript";
import {IAccountMapper} from "./AccountMapper";
import {AccountModel} from "../models";

export abstract class  IAccountService {
  abstract getAll(): Promise<AccountModel[]>;
  abstract save(account: AccountModel) : Promise<void>;
  abstract delete(id: AAGUID) : Promise<void>;
  abstract restore(id: AAGUID) : Promise<void>;
}

export class AccountService implements IAccountService {

  storageName = 'Account';

  constructor(
    private repository: IIDBRepository, 
    private mapper: IAccountMapper
  ){}

  getAll(): Promise<AccountModel[]> {
    return new Promise<AccountModel[]>((resolve, reject) => {

      this
      .repository
      .query<Account>(this.storageName)
      .then(accounts => {

        let result = accounts.sort((a, b)=>{
          
          if (a.name > b.name) 
            return 1;
          
          if (a.name < b.name) 
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

  save(account: AccountModel): Promise<void> {
    return new Promise<void>((resolve, reject) => {

      if (account.id) {

        this
          .repository
          .getById<Account>(this.storageName, account.id)
          .then(updateAccount => {
  
            updateAccount.name = account.name;
            updateAccount.currencyId = account.currencyId;
            updateAccount.balance = account.balance;
            updateAccount.description = account.description;
            updateAccount.showOnHomePage = account.showOnHomePage;
            updateAccount.displayOrder = account.displayOrder;
            updateAccount.modifiedDateTime = new Date();
  
            this._adjust(updateAccount);
            
            this
              .repository
              .update<Account>(this.storageName, updateAccount)
              .then(() => resolve())
              .catch(e => reject(e));
          })
          .catch(e => reject(e));
      } else {
  
        let newAccount = new Account(
          GUID.New(),
          account.name,
          account.currencyId,
          account.balance,
          account.description,
          account.showOnHomePage,
          account.displayOrder
        );
  
        if (!newAccount.currencyId){
          reject({name: 'CurrencyIsMissing'});
          return;
        }
  
        this._adjust(newAccount);
  
        this
          .repository
          .update<Account>(this.storageName, newAccount)
          .then(() => resolve())
          .catch(e => reject(e));
      }
    });
  }

  delete(id: string): Promise<void> {
    return this._updateIsDeleted(id, true);
  }

  restore(id: string): Promise<void> {
    return this._updateIsDeleted(id, false);
  }

  private _adjust(account: Account): void {
    account.balance = account.balance || 0;
    account.displayOrder = account.displayOrder || 0;
  }

  private _updateIsDeleted(id: AAGUID, isDeleted: boolean) : Promise<void> {
    return new Promise<void>((resolve, reject) => {

      this
        .repository
        .getById<Account>(this.storageName, id)
        .then(account => {

          account.isDeleted = isDeleted;
          account.modifiedDateTime = new Date();

          this
            .repository
            .update<Account>(this.storageName, account)
            .then(() => resolve())
          .catch(e => reject(e));
        })
        .catch(e => reject(e));
    });
  }
  
}