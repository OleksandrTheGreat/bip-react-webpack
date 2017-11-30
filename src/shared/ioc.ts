import {IIDBAdapter} from '../IndexedDB/IDBAdapter';
import {IIDBRepository, IDBRepository} from '../IndexedDB/IDBRepository';

import {idbAdapter} from './db';

import {IHomePageService, HomePageService} from '../services/HomePageService';
import {ICurrencyService, CurrencyService} from '../services/CurrencyService';
import {IAccountService, AccountService} from '../services/AccountService';

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

  ICurrencyService: new iocRegistry<ICurrencyService>(()=> {
    return new CurrencyService(ioc.IIDBRepository.resolve())
  }),

  IAccountService: new iocRegistry<IAccountService>(()=> {
    return new AccountService(ioc.IIDBRepository.resolve())
  }),
};

export {ioc}
