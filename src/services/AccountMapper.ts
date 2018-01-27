import {Account} from './../domain';
import {AccountModel} from '../models/AccountModel';
import {IIDBRepository} from '../IndexedDB/IDBRepository';
import {Currency} from '../domain/Currency';
import {state} from '../shared';

export interface IAccountMapper {
  toModelList(accounts : Account[]) : Promise < AccountModel[] >;
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
            let balance = account.balance.toLocaleString(
              state.i18n.locale, 
              {
                style: 'decimal',
                minimumFractionDigits: currency.precision
              });

            return new AccountModel(
              account.id, 
              account.name, 
              balance, 
              currency.name, 
              account.showOrder, 
              account.description
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