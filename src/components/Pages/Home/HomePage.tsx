import * as React from 'react';
import {ioc} from '../../../shared';
import {IHomePageService} from '../../../services/HomePageService';

import {AccountList} from './AccountList';
import {AccountModel} from '../../../models/AccountModel';

export class HomePage extends React.Component < {}, {accounts: AccountModel[]} > {

  private _service: IHomePageService;

  constructor() {
    super();

    this._service = ioc
      .IHomePageService
      .resolve();

    this.state = {
      accounts: []
    };

    this._refreshAccounts();
  }

  render() {
    return (<AccountList list={this.state.accounts}/>);
  }

  private _refreshAccounts() {

    this
      ._service
      .getDashboardAccounts()
      .then((accounts : AccountModel[]) => {
        this.setState((state) => {
          return {
            ...state,
            accounts: accounts
          }
        });
      });
  }
}
