import * as React from 'react';
import {state} from '../../../shared';
import {AccountItem} from './AccountItem';
import {AccountModel} from '../../../models/AccountModel';

export class AccountsList extends React.Component<{accounts: AccountModel[]}> {

  render() {

    let list = [
      new AccountModel(null, null, null),
      ...this.props.accounts
    ];

    let items = list.map(x => <AccountItem account={x} key={x.id}/>);
    
    return (
      <div className="container-fluid row-list">
        {items}
      </div>
    );
  }
}
