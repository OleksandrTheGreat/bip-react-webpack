import {IIDBAdapter} from '../IndexedDB/IDBAdapter';
import {IIDBRepository, IDBRepository} from '../IndexedDB/IDBRepository';

import {idbAdapter} from './db';

import { IHomePageService, HomePageService } from '../services/HomePageService';

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
  })
};

export {ioc}
