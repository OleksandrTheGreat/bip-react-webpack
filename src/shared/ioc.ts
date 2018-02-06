import {IOCContainer} from 'ioc';
import {IIDBAdapter, IIDBRepository, IDBRepository} from 'xIndexedDB';
import {ABus} from 'abus';

import {idbAdapter} from './db';
import {IAccountMapper, AccountMapper} from '../services/AccountMapper';
import {ICurrencyService, CurrencyService} from '../services/CurrencyService';
import {IAccountService, AccountService} from '../services/AccountService';
import {IHomePageService, HomePageService} from '../services/HomePageService';
import { IMarkerService, MarkerService } from '../services/MarkerService';


const ioc = new IOCContainer();
const bus = new ABus();

ioc.register<ABus>(ABus, container => bus);
ioc.register<IIDBAdapter>(IIDBAdapter, container => idbAdapter);
ioc.register<IIDBRepository>(IIDBRepository, container => new IDBRepository(container.resolve<IIDBAdapter>(IIDBAdapter)));
ioc.register<IAccountMapper>(IAccountMapper, container => new AccountMapper(container.resolve<IIDBRepository>(IIDBRepository)));
ioc.register<ICurrencyService>(ICurrencyService, container => new CurrencyService(container.resolve<IIDBRepository>(IIDBRepository)));
ioc.register<IAccountService>(IAccountService, container => new AccountService(container.resolve<IIDBRepository>(IIDBRepository), container.resolve<IAccountMapper>(IAccountMapper)));
ioc.register<IHomePageService>(IHomePageService, container => new HomePageService(container.resolve<IIDBRepository>(IIDBRepository), container.resolve<IAccountMapper>(IAccountMapper)));
ioc.register<IMarkerService>(IMarkerService, container => new MarkerService(container.resolve<IIDBRepository>(IIDBRepository)));

export {ioc}
