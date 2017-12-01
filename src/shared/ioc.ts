import {IIDBAdapter} from '../IndexedDB/IDBAdapter';
import {IIDBRepository, IDBRepository} from '../IndexedDB/IDBRepository';

import {idbAdapter} from './db';

import {IHomePageService, HomePageService} from '../services/HomePageService';
import {ICurrencyListService, CurrencyListService} from '../services/CurrencyListService';
import {IAccountsListService, AccountsListService} from '../services/AccountsListService';
import {IAccountMapper, AccountMapper} from '../services/AccountMapper';

export class iocRegistry < T > {
  constructor(public resolve : () => T) {}
}

export type IOC = {
  IIDBAdapter: iocRegistry<IIDBAdapter>,
  IIDBRepository: iocRegistry<IIDBRepository>,
  IHomePageService: iocRegistry<IHomePageService>,
  ICurrencyListService: iocRegistry<ICurrencyListService>,
  IAccountsListService: iocRegistry<IAccountsListService>,
  IAccountMapper: iocRegistry<IAccountMapper>
}

const ioc: IOC = {
  IIDBAdapter: new iocRegistry < IIDBAdapter > (() => {
    return idbAdapter;
  }),

  IIDBRepository: new iocRegistry < IIDBRepository > (() => {
    return new IDBRepository(ioc.IIDBAdapter.resolve());
  }),

  IHomePageService: new iocRegistry < IHomePageService > (() => {
    return new HomePageService(ioc.IIDBRepository.resolve(), ioc.IAccountMapper.resolve());
  }),

  ICurrencyListService: new iocRegistry < ICurrencyListService > (() => {
    return new CurrencyListService(ioc.IIDBRepository.resolve());
  }),

  IAccountsListService: new iocRegistry < IAccountsListService > (() => {
    return new AccountsListService(ioc.IIDBRepository.resolve(), ioc.IAccountMapper.resolve());
  }),

  IAccountMapper: new iocRegistry < IAccountMapper > (() => {
    return new AccountMapper(ioc.IIDBRepository.resolve())
  })
};

export {ioc}
