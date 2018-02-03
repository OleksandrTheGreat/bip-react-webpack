import {bus, state, ioc} from '../../shared';
import {Account} from "../../domain/Account";
import {QueryDashboardAccounts, QueryAccountList} from '../commands/account.commands';

(() => {

  let _repository = ioc.IIDBRepository.resolve();
  let _mapper = ioc.IAccountMapper.resolve();

  bus.Handle(QueryDashboardAccounts, (command: QueryDashboardAccounts) => {

    _repository
      .query<Account>('Account', account => !account.isDeleted && account.showOnHomePage)
      .then(accounts => {

        let result = accounts.sort((a, b)=>{
          
          if(a.displayOrder > b.displayOrder)
            return 1;
          
          if(a.displayOrder < b.displayOrder)
            return -1;
          
          return 0;
        });

        _mapper
          .toModelList(result)
          .then(models => command.onSuccess(models))
          .catch(e => command.onError(e));
      })
      .catch(e => command.onError(e));
  });

  bus.Handle(QueryAccountList, (command: QueryAccountList) => {

    _repository
      .query<Account>('Account', account => !account.isDeleted && account.showOnHomePage)
      .then(accounts => {

        let result = accounts.sort((a, b)=>{
          
          if (a.name > b.name) 
            return 1;
          
          if (a.name < b.name) 
            return -1;
          
          return 0;
        });

        _mapper
          .toModelList(result)
          .then(models => command.onSuccess(models))
          .catch(e => command.onError(e));
      })
      .catch(e => command.onError(e));
  });
})();
