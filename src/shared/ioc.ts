import {IIDBAdapter} from '../IndexedDB/IDBAdapter';
import {IIDBRepository, IDBRepository} from '../IndexedDB/IDBRepository';

import {idbAdapter} from './db';

import {IHomePageService, HomePageService} from '../services/HomePageService';
import {ICurrencyListService, CurrencyListService} from '../services/CurrencyListService';
import {IAccountsListService, AccountsListService} from '../services/AccountsListService';
import {IAccountMapper, AccountMapper} from '../services/AccountMapper';
import {ICurrencyFormService, CurrencyFormService} from '../services/CurrencyFormService';
import {IApplicationStateService, ApplicationStateService} from '../services/ApplicationStateService';

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
  ICurrencyFormService: iocRegistry<ICurrencyFormService>;
}

const ioc: IOC = {
  IIDBAdapter: new iocRegistry < IIDBAdapter > (() => idbAdapter),
  IIDBRepository: new iocRegistry < IIDBRepository > (() => new IDBRepository(ioc.IIDBAdapter.resolve())),
  IHomePageService: new iocRegistry < IHomePageService > (() => new HomePageService(ioc.IIDBRepository.resolve(), ioc.IAccountMapper.resolve())),
  ICurrencyListService: new iocRegistry < ICurrencyListService > (() => new CurrencyListService(ioc.IIDBRepository.resolve())),
  IAccountsListService: new iocRegistry < IAccountsListService > (() => new AccountsListService(ioc.IIDBRepository.resolve(), ioc.IAccountMapper.resolve())),
  IAccountMapper: new iocRegistry < IAccountMapper > (() => new AccountMapper(ioc.IIDBRepository.resolve())),
  ICurrencyFormService: new iocRegistry<ICurrencyFormService>(() => new CurrencyFormService(ioc.IIDBRepository.resolve()))
};

export {ioc}
