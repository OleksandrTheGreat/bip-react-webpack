import * as React from 'react';
import {ioc} from '../../../shared';
import {Account} from '../../../domain';
import {IHomePageService} from '../../../services/HomePageService';

import {HomePageAccountList} from './HomePageAccountList';

export class HomePage extends React.Component < {}, {
  accounts: Account[]
} > {

  private _service: IHomePageService;

  constructor() {
    super();

    this._service = ioc.IHomePageService.resoleve();

    this.state = {
      accounts: []
    };

    this.refreshAccounts();
  }

  render() {
    return (
      <HomePageAccountList list={this.state.accounts} />
    );
  }

  private refreshAccounts() {

    this
      ._service
      .getDashboardAccounts()
      .then((accounts : Account[]) => {
        this.setState((state) => {
          return {
            ...state,
            accounts: accounts.sort((a, b) => {

              if (a.showOrder > b.showOrder) 
                return 1;
              
              if (a.showOrder < b.showOrder) 
                return -1;
              
              return 0;
            })
          }
        });
      });
  }
}
