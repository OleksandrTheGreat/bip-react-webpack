import {Account} from '../domain/Account';
import {IIDBRepository} from '../IndexedDB/IDBRepository';

export interface IHomePageService {
  getDashboardAccounts(): Promise<Array<Account>>
}

export class HomePageService implements IHomePageService {

  private _repository: IIDBRepository;

  constructor(repository: IIDBRepository){
    this._repository = repository;
  }

  getDashboardAccounts(): Promise<Account[]> {

    return new Promise<Account[]>((resolve)=>{

      this._repository.query<Account>('Account', (account) => {
        return !account.isDeleted && account.showOnHomePage;
      })
      .then((accounts) => {

        let result = accounts.sort((a, b)=>{
          
          if(a.showOrder > b.showOrder)
            return 1;
          
          if(a.showOrder < b.showOrder)
            return -1;
          
          return 0;
        });

        resolve(result);
      });
    });
  }
}