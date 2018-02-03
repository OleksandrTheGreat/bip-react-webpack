import {bus, state, ioc} from '../../shared';
import {Account} from "../../domain/Account";
import {QueryDashboardAccounts, QueryAccountList, SaveAccount, DeleteAccount, ResoreAccount} from '../commands/account.commands';
import { GUID } from 'xtypescript';

(() => {

  const storageName = 'Account';
  let _repository = ioc.IIDBRepository.resolve();
  let _mapper = ioc.IAccountMapper.resolve();

  bus.Handle(QueryDashboardAccounts, (command: QueryDashboardAccounts) => {

    _repository
      .query<Account>(storageName, account => !account.isDeleted && account.showOnHomePage)
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
      .query<Account>(storageName)
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

  bus.Handle(SaveAccount, (command: SaveAccount) => {

    if (command.account.id) {

      _repository
        .getById<Account>(storageName, command.account.id)
        .then(account => {

          account.name = command.account.name;
          account.currencyId = command.account.currencyId;
          account.balance = command.account.balance;
          account.description = command.account.description;
          account.showOnHomePage = command.account.showOnHomePage;
          account.displayOrder = command.account.displayOrder;
          account.modifiedDateTime = new Date();

          adjust(account);
          
          _repository
            .update<Account>(storageName, account)
            .then(() => command.onSuccess())
            .catch(e => command.onError(e));
        })
        .catch(e => command.onError(e));

    } else {

      let account = new Account(
        GUID.New(),
        command.account.name,
        command.account.currencyId,
        command.account.balance || 0,
        command.account.description,
        command.account.showOnHomePage,
        command.account.displayOrder
      );

      if (!account.currencyId){
        command.onError({name: 'CurrencyIsMissing'});
        return;
      }

      adjust(account);

      _repository
        .update<Account>(storageName, account)
        .then(() => command.onSuccess())
        .catch(e => command.onError(e));
    }
  });

  bus.Handle(DeleteAccount, (command: DeleteAccount) => {

    _repository
      .getById<Account>(storageName, command.id)
      .then(account => {

        account.isDeleted = true;
        account.modifiedDateTime = new Date();

        _repository
          .update<Account>(storageName, account)
          .then(() => command.onSuccess())
          .catch(e => command.onError(e));
      })
      .catch(e => command.onError(e));
  });
  
  bus.Handle(ResoreAccount, (command: ResoreAccount) => {

    _repository
      .getById<Account>(storageName, command.id)
      .then(account => {

        account.isDeleted = false;
        account.modifiedDateTime = new Date();

        _repository
          .update<Account>(storageName, account)
          .then(() => command.onSuccess())
          .catch(e => command.onError(e));
      })
      .catch(e => command.onError(e));
  });

  function adjust(account: Account): void {
    account.balance = account.balance || 0;
    account.displayOrder = account.displayOrder || 0;
  }

})();
