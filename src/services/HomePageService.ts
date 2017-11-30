import {Account, Currency} from '../domain';
import {IIDBRepository} from '../IndexedDB/IDBRepository';
import {AccountModel} from '../models/AccountModel';

export interface IHomePageService {
  getDashboardAccounts(): Promise<Array<AccountModel>>
}

export class HomePageService implements IHomePageService {

  private _repository: IIDBRepository;

  constructor(repository: IIDBRepository){
    this._repository = repository;
  }

  getDashboardAccounts(): Promise<AccountModel[]> {

    return new Promise<AccountModel[]>((resolve, reject)=>{

      this._repository
      .query<Account>('Account', account => !account.isDeleted && account.showOnHomePage)
      .then((accounts) => {

        let result = accounts.sort((a, b)=>{
          
          if(a.showOrder > b.showOrder)
            return 1;
          
          if(a.showOrder < b.showOrder)
            return -1;
          
          return 0;
        });

        this._mapToAccountModel(result).then(models => {
          resolve(models);
        })
        .catch(e => {reject(e);});
      })
      .catch(e => {reject(e);});
    });
  }

  private _mapToAccountModel(accounts: Account[]): Promise<AccountModel[]> {

    return new Promise<AccountModel[]>((resolve, reject)=>{

      this
        ._getCurrencyList()
        .then(currencyList => {

          let result = accounts.map(account => {
            return new AccountModel(
              account.id, 
              account.name, 
              account.balance, 
              currencyList.filter(x=>x.id === account.currencyId)[0].name,
              account.showOrder
            )
          });

          resolve(result);
        })
        .catch(e => {reject(e);});
    });
  }

  private _getCurrencyList(): Promise<Currency[]> {
    return this._repository.query<Currency>('Currency', null);
  }
}