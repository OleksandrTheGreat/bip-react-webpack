import * as React from 'react';
import {state} from '../../../shared';
import {AccountItem} from './AccountItem';
import {AccountModel} from '../../../models/AccountModel';

export class AccountsList extends React.Component<{accounts: AccountModel[]}> {

  render() {

    let availableAccounts = [
      new AccountModel(null, null, null),
    ];

    let deletedAccounts = [];

    this.props.accounts.forEach(x => {
      if(x.isDeleted) 
        deletedAccounts.push(x);
      else
        availableAccounts.push(x);
    });

    let availableItems = availableAccounts.map(x => <AccountItem account={x} key={x.id}/>);
    let deletedItems = deletedAccounts.map(x => <AccountItem account={x} key={x.id}/>);

    return (
      <div className="container-fluid row-list">
        {availableItems}
        {deletedItems}
      </div>
    );
  }
}
