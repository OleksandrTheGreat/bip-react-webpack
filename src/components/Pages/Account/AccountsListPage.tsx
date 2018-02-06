import * as React from 'react';
import {ABus} from 'abus';
import {state, ioc} from '../../../shared';
import {Header} from '../../common/Page/Header';
import {AccountsList} from './AccountsList';
import {AccountModel} from '../../../models/AccountModel';
import {QueryAccountList, RefreshAccountsListPage} from '../../../bus/commands/account.commands';
import {ShowError} from '../../../bus/commands';

export class AccountsListPage extends React.Component < {}, {accounts: AccountModel[]} > {

  private _bus = ioc.resolve<ABus>(ABus);

  constructor() {
    super();

    this.state = {
      accounts: []
    };

    this._bus.Handle(RefreshAccountsListPage, () => this._refreshAccount());

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
    this._bus.SendAsync(new QueryAccountList(
      (accounts) => {
        this.setState((state) => {
          return {
            ...state,
            accounts: accounts
          }
        });
      },
      (error) => {
        this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
      }
    ));
  }
}
