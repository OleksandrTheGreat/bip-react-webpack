import {bus, state, ioc} from '../../shared';
import {Account} from "../../domain/Account";
import {QueryDashboardAccounts, QueryAccountList, SaveAccount, DeleteAccount, ResoreAccount} from '../commands/account.commands';
import {GUID} from 'xtypescript';
import {IHomePageService} from '../../services/HomePageService';
import {IAccountService} from '../../services/AccountService';

(() => {

  let _accountService = ioc.resolve<IAccountService>(IAccountService);
  let _homePagService = ioc.resolve<IHomePageService>(IHomePageService);

  bus.Handle(QueryDashboardAccounts, (command: QueryDashboardAccounts) => {

    _homePagService
      .getAccounts()
      .then(accounts => command.onSuccess(accounts))
      .catch(e => command.onError(e));
  });

  bus.Handle(QueryAccountList, (command: QueryAccountList) => {

    _accountService
      .getAll()
      .then(accounts => command.onSuccess(accounts))
      .catch(e => command.onError(e));
  });

  bus.Handle(SaveAccount, (command: SaveAccount) => {

    _accountService
      .save(command.account)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  bus.Handle(DeleteAccount, (command: DeleteAccount) => {

    _accountService
      .delete(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });
  
  bus.Handle(ResoreAccount, (command: ResoreAccount) => {

    _accountService
      .restore(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

})();
