import {Account} from "../domain";
import {IIDBRepository} from "../IndexedDB/IDBRepository";

export interface IAccountListService {
  getAll() : Promise < Account[] >
}

export class AccountListService implements IAccountListService {

  private _repository : IIDBRepository;

  constructor(repository : IIDBRepository) {
    this._repository = repository;
  }

  getAll() : Promise < Account[] > {
    return new Promise<Account[]>((resolve, reject) => {

      this._repository
      .query<Account>("Account", null)
      .then(AccountList => {
        let result = AccountList.sort((a, b)=>{
          
          if(a.name > b.name)
            return 1;
          
          if(a.name < b.name)
            return -1;
          
          return 0;
        });

        resolve(result);
      })
      .catch(e => {reject(e);});
    });
  }
}
