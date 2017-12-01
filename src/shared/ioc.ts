import {IIDBAdapter} from '../IndexedDB/IDBAdapter';
import {IIDBRepository, IDBRepository} from '../IndexedDB/IDBRepository';

import {idbAdapter} from './db';

import {IHomePageService, HomePageService} from '../services/HomePageService';
import {ICurrencyListService, CurrencyListService} from '../services/CurrencyListService';
import {IAccountListService, AccountListService} from '../services/AccountListService';

class iocRegistry < T > {
  constructor(public resolve : () => T) {}
}

const ioc = {
  IIDBAdapter: new iocRegistry<IIDBAdapter>(() => {
    return idbAdapter;
  }),
  
  IIDBRepository: new iocRegistry<IIDBRepository>(() => {
    return new IDBRepository(ioc.IIDBAdapter.resolve());
  }),

  IHomePageService: new iocRegistry<IHomePageService>(()=>{
    return new HomePageService(ioc.IIDBRepository.resolve());
  }),

  ICurrencyListService: new iocRegistry<ICurrencyListService>(()=> {
    return new CurrencyListService(ioc.IIDBRepository.resolve())
  }),

  IAccountListService: new iocRegistry<IAccountListService>(()=> {
    return new AccountListService(ioc.IIDBRepository.resolve())
  }),
};

export {ioc}
