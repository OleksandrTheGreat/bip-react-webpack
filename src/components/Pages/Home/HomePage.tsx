import * as React from 'react';
import {state, idbAdapter} from '../../../shared';
import {Account} from '../../../domain';
import {IHomePageService, HomePageService} from '../../../services/HomePageService';
import { IDBRepository } from '../../../IndexedDB/IDBRepository';

export class HomePage extends React.Component < {}, {
  accounts: Array < Account >
} > {

  private _service: IHomePageService;

  constructor() {
    super();

    this._service = new HomePageService(new IDBRepository(idbAdapter));

    this.state = {
      accounts: []
    };

    this.refreshAccounts();
  }

  render() {

    return (
      <ul>
        {this.renderAccountItems(this.state.accounts)}
      </ul>
    );
  }

  private refreshAccounts() {

    this
      ._service
      .getDashboardAccounts()
      .then((accounts : Array < Account >) => {
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

  private renderAccountItems(accounts : Array < Account >) {

    let items = [];
    let i = 0;
    let len = accounts.length;

    for (i = 0; i < len; i++) 
      items.push(this.renderAccountItem(this.state.accounts[i]));
    
    return items;
  }

  private renderAccountItem(account : Account) {
    return <li key={account.id}>{account.name}</li>;
  }
}
