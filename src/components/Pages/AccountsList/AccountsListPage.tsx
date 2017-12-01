import * as React from 'react';
import {state, ioc} from '../../../shared';
import {Header} from '../Header';
import {Account} from '../../../domain';
import {AccountsList} from './AccountsList';
import {IAccountListService} from "../../../services/AccountListService";

export class AccountsListPage extends React.Component < {}, {accounts: Account[]} > {

  private _service: IAccountListService;

  constructor() {
    super();

    this._service = ioc.IAccountListService.resolve();

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
    .getAll()
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
