import * as React from 'react';
import {state} from '../../../shared';
import {AccountItem} from './AccountItem';
import {AccountModel} from '../../../models/AccountModel';

export class AccountsList extends React.Component<{accounts: AccountModel[]}> {

  render() {

    let list = [
      new AccountModel(null, null, null),
    ];

    let deletedList = [];

    this.props.accounts.forEach(x => {
      if(x.isDeleted) 
        deletedList.push(x);
      else
        list.push(x);
    });

    let items = list.map(x => <AccountItem account={x} key={x.id}/>);
    let deletedItems = deletedList.map(x => <AccountItem account={x} key={x.id}/>);

    return (
      <div className="container-fluid row-list">
        {items}
        {deletedItems}
      </div>
    );
  }
}
