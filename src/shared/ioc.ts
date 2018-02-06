import {IOCContainer} from 'ioc';
import {IIDBAdapter, IIDBRepository, IDBRepository} from 'xIndexedDB';

import {idbAdapter} from './db';
import {IAccountMapper, AccountMapper} from '../services/AccountMapper';
import {ICurrencyService, CurrencyService} from '../services/CurrencyService';
import {IAccountService, AccountService} from '../services/AccountService';
import {IHomePageService, HomePageService} from '../services/HomePageService';

const ioc = new IOCContainer();

ioc.register<IIDBAdapter>(IIDBAdapter, container => idbAdapter);
ioc.register<IIDBRepository>(IIDBRepository, container => new IDBRepository(container.resolve<IIDBAdapter>(IIDBAdapter)));
ioc.register<IAccountMapper>(IAccountMapper, container => new AccountMapper(container.resolve<IIDBRepository>(IIDBRepository)));
ioc.register<ICurrencyService>(ICurrencyService, container => new CurrencyService(container.resolve<IIDBRepository>(IIDBRepository)));
ioc.register<IAccountService>(IAccountService, container => new AccountService(container.resolve<IIDBRepository>(IIDBRepository), container.resolve<IAccountMapper>(IAccountMapper)));
ioc.register<IHomePageService>(IHomePageService, container => new HomePageService(container.resolve<IIDBRepository>(IIDBRepository), container.resolve<IAccountMapper>(IAccountMapper)));

export {ioc}
