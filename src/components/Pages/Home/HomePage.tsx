import * as React from 'react';
import {ABus} from 'abus';
import {ioc, state} from '../../../shared';
import {AccountList} from './AccountList';
import {AccountModel} from '../../../models/AccountModel';
import {QueryDashboardAccounts} from '../../../bus/commands/account.commands';
import {ShowError} from '../../../bus/commands';

export class HomePage extends React.Component < {}, {accounts: AccountModel[]} > {

  private _bus = ioc.resolve<ABus>(ABus);

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

    this._bus.SendAsync(
      new QueryDashboardAccounts(
        (accounts : AccountModel[]) => {
          this.setState((state) => {
            return {
              ...state,
              accounts: accounts
            }
          });
        },
        error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))
      )
    );
  }
}
