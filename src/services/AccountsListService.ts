import {Account} from "../domain";
import {IIDBRepository} from "../IndexedDB/IDBRepository";
import {AccountModel} from "../models/AccountModel";
import {IAccountMapper} from "./AccountMapper";

export interface IAccountsListService {
  getAccounts() : Promise < AccountModel[] >
}

export class AccountsListService implements IAccountsListService {

  private _repository: IIDBRepository;
  private _mapper: IAccountMapper;

  constructor(
    repository: IIDBRepository,
    mapper: IAccountMapper
  ) {
    this._repository = repository;
    this._mapper = mapper;
  }

  getAccounts() : Promise < AccountModel[] > {

    return new Promise < AccountModel[] > ((resolve, reject) => {

      this._repository.query < Account > ('Account', null).then((accounts) => {

        let result = accounts.sort((a, b) => {

          if (a.name > b.name) 
            return 1;
          
          if (a.name < b.name) 
            return -1;
          
          return 0;
        });

        this
          ._mapper
          .toModelList(result)
          .then(models => { resolve(models); })
          .catch(e => {
            reject(e);
          });
      }).catch(e => {
        reject(e);
      });
    });
  }
}
