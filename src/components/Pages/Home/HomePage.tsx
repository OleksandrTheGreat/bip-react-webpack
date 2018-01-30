import * as React from 'react';
import {bus, state} from '../../../shared';

import {AccountList} from './AccountList';
import {AccountModel} from '../../../models/AccountModel';
import {QueryDashboardAccounts} from '../../../bus/commands/account.commands';
import {ShowError} from '../../../bus/commands';

export class HomePage extends React.Component < {}, {accounts: AccountModel[]} > {

  constructor() {
    super();

    this.state = {
      accounts: []
    };

    this._refreshAccounts();
  }

  render() {
    return (<AccountList list={this.state.accounts}/>);
  }

  private _refreshAccounts() {

    bus.SendAsync(
      new QueryDashboardAccounts(
        (accounts : AccountModel[]) => {
          this.setState((state) => {
            return {
              ...state,
              accounts: accounts
            }
          });
        },
        (error) => {
          bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
        }));
  }
}
