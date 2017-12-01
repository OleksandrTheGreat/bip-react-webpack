import * as React from 'react';
import {AccountItem} from './AccountItem';
import {AccountModel} from '../../../models/AccountModel';

export class AccountsList extends React.Component<{accounts: AccountModel[]}> {

  render() {
    let items = this.props.accounts.map(x => <AccountItem account={x} key={x.id}/>);
    
    return (
      <div className="container-fluid row-list">
        {items}
      </div>
    );
  }
}
