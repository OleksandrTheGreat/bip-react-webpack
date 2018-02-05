import {IIDBAdapter} from '../IndexedDB/IDBAdapter';
import {IIDBRepository, IDBRepository} from '../IndexedDB/IDBRepository';

import {idbAdapter} from './db';
import {IAccountMapper, AccountMapper} from '../services/AccountMapper';
import {ICurrencyService, CurrencyService} from '../services/CurrencyService';
import { IAccountService, AccountService } from '../services/AccountService';
import { IHomePageService, HomePageService } from '../services/HomePageService';

export class iocRegistry < T > {
  constructor(public resolve : () => T) {}
}

export type IOC = {
  IIDBAdapter: iocRegistry<IIDBAdapter>,
  IIDBRepository: iocRegistry<IIDBRepository>,
  IAccountMapper: iocRegistry<IAccountMapper>,
  ICurrencyService: iocRegistry<ICurrencyService>,
  IAccountService: iocRegistry<IAccountService>,
  IHomePageService: iocRegistry<IHomePageService>
}

const ioc: IOC = {
  IIDBAdapter: new iocRegistry < IIDBAdapter > (() => idbAdapter),
  IIDBRepository: new iocRegistry < IIDBRepository > (() => new IDBRepository(ioc.IIDBAdapter.resolve())),
  IAccountMapper: new iocRegistry < IAccountMapper > (() => new AccountMapper(ioc.IIDBRepository.resolve())),
  ICurrencyService: new iocRegistry < ICurrencyService > (() => new CurrencyService(ioc.IIDBRepository.resolve())),
  IAccountService: new iocRegistry < IAccountService > (() => new AccountService(ioc.IIDBRepository.resolve(), ioc.IAccountMapper.resolve())),
  IHomePageService: new iocRegistry < IHomePageService > (() => new HomePageService(ioc.IIDBRepository.resolve(), ioc.IAccountMapper.resolve())),
};

export {ioc}
