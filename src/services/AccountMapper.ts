import {Account} from './../domain';
import {AccountModel} from '../models/AccountModel';
import {IIDBRepository} from 'xIndexedDB';
import {Currency} from '../domain/Currency';
import {state} from '../shared';

export abstract class IAccountMapper {
  abstract toModelList(accounts : Account[]) : Promise < AccountModel[] >;
}

export class AccountMapper implements IAccountMapper {

  private _repository : IIDBRepository;

  constructor(repository : IIDBRepository) {
    this._repository = repository;
  }

  toModelList(accounts : Account[]) : Promise < AccountModel[] > {

    return new Promise < AccountModel[] > ((resolve, reject) => {

      this
        ._getCurrencyList()
        .then(currencyList => {

          let result = accounts.map(account => {

            let currency = currencyList.filter(x => x.id === account.currencyId)[0];

            return new AccountModel(
              account.id, 
              account.name, 
              account.balance, 
              currency.id,
              currency.name, 
              account.displayOrder, 
              account.description,
              currency.precision,
              account.showOnHomePage,
              account.isDeleted
            )
          });

          resolve(result);
        })
        .catch(e => {
          reject(e);
        });
    });
  }

  private _getCurrencyList() : Promise < Currency[] > {
    return this._repository.query < Currency > ('Currency', null);
  }
}