import {Account, Currency} from '../domain';
import {IIDBRepository} from '../IndexedDB/IDBRepository';
import {AccountModel} from '../models/AccountModel';
import { IAccountMapper } from './AccountMapper';

export interface IHomePageService {
  getDashboardAccounts(): Promise<Array<AccountModel>>
}

export class HomePageService implements IHomePageService {

  private _repository: IIDBRepository;
  private _mapper: IAccountMapper;

  constructor(
    repository: IIDBRepository,
    mapper: IAccountMapper
  ){
    this._repository = repository;
    this._mapper = mapper;
  }

  getDashboardAccounts(): Promise<AccountModel[]> {

    return new Promise<AccountModel[]>((resolve, reject)=>{

      this._repository
      .query<Account>('Account', account => !account.isDeleted && account.showOnHomePage)
      .then((accounts) => {

        let result = accounts.sort((a, b)=>{
          
          if(a.showOrder > b.showOrder)
            return 1;
          
          if(a.showOrder < b.showOrder)
            return -1;
          
          return 0;
        });

        this._mapper
        .toModelList(result)
        .then(models => {resolve(models);})
        .catch(e => {reject(e);});
      })
      .catch(e => {reject(e);});
    });
  }
}