import * as React from 'react';
import {Account} from '../../../domain';
import {AccountItem} from './AccountItem';

export class AccountsList extends React.Component<{accounts: Account[]}> {

  render() {
    let items = this.props.accounts.map(x => <AccountItem account={x} key={x.id}/>);
    
    return (
      <div className="container-fluid row-list">
        {items}
      </div>
    );
  }
}
