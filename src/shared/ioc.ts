import {IIDBAdapter} from '../IndexedDB/IDBAdapter';
import {IIDBRepository, IDBRepository} from '../IndexedDB/IDBRepository';

import {idbAdapter} from './db';

import {IAccountsListService, AccountsListService} from '../services/AccountsListService';
import {IAccountMapper, AccountMapper} from '../services/AccountMapper';

export class iocRegistry < T > {
  constructor(public resolve : () => T) {}
}

export type IOC = {
  IIDBAdapter: iocRegistry<IIDBAdapter>,
  IIDBRepository: iocRegistry<IIDBRepository>,
  IAccountsListService: iocRegistry<IAccountsListService>,
  IAccountMapper: iocRegistry<IAccountMapper>
}

const ioc: IOC = {
  IIDBAdapter: new iocRegistry < IIDBAdapter > (() => idbAdapter),
  IIDBRepository: new iocRegistry < IIDBRepository > (() => new IDBRepository(ioc.IIDBAdapter.resolve())),
  IAccountsListService: new iocRegistry < IAccountsListService > (() => new AccountsListService(ioc.IIDBRepository.resolve(), ioc.IAccountMapper.resolve())),
  IAccountMapper: new iocRegistry < IAccountMapper > (() => new AccountMapper(ioc.IIDBRepository.resolve())),
};

export {ioc}
