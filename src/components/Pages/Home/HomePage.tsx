import * as React from 'react';
import {state, idbAdapter} from '../../../shared';
import {Account} from '../../../domain';
import {IndexedDBRepository} from '../../../indexedDB/IndexedDBRepository';

export class HomePage extends React.Component < {}, {
  accounts: Array < Account >
} > {

  private _repository: IndexedDBRepository;

  constructor() {
    super();

    this._repository = new IndexedDBRepository(idbAdapter);

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

    this._repository.query<Account>('Account', (account: Account): boolean => {
      return !account.isDeleted && account.showOnHomePage;
    })
    .then((accounts: Array<Account>) => {
      this.setState((state) => {
        return {
          ...state,
          accounts: accounts.sort((a, b)=>{
            
            if(a.showOrder > b.showOrder)
              return 1;
            
            if(a.showOrder < b.showOrder)
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
