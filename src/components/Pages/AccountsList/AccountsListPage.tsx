import * as React from 'react';
import {state, bus} from '../../../shared';
import {Header} from '../../common/Page/Header';
import {AccountsList} from './AccountsList';
import {AccountModel} from '../../../models/AccountModel';
import { QueryAccountList } from '../../../bus/commands/account.commands';
import { ShowError } from '../../../bus/commands/index';

export class AccountsListPage extends React.Component < {}, {accounts: AccountModel[]} > {

  constructor() {
    super();

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
    bus.SendAsync(new QueryAccountList(
      (accounts) => {
        this.setState((state) => {
          return {
            ...state,
            accounts: accounts
          }
        });
      },
      (error) => {
        bus.SendAsync(new ShowError(error));
      }
    ));
  }
}
