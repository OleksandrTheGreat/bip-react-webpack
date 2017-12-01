import * as React from 'react';
import {state, ioc} from '../../../shared';
import {Header} from '../Controls/Page/Header';
import {AccountsList} from './AccountsList';
import {IAccountsListService} from "../../../services/AccountsListService";
import {AccountModel} from '../../../models/AccountModel';

export class AccountsListPage extends React.Component < {}, {accounts: AccountModel[]} > {

  private _service: IAccountsListService;

  constructor() {
    super();

    this._service = ioc.IAccountsListService.resolve();

    this.state = {
      accounts: []
    };

    this._refreshAccount();
  }

  render() {
    return (
      <div>
        <Header>
          <i className="fa header-icon fa-money"></i>
          {state.i18n.accountsList.title}
        </Header>
        <AccountsList accounts={this.state.accounts}/>
      </div>
    );
  }

  private _refreshAccount() {
    this
    ._service
    .getAccounts()
    .then((accounts) => {
      this.setState((state) => {
        return {
          ...state,
          accounts: accounts
        }
      });
    });
  }
}
