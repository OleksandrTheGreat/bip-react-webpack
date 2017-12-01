import * as React from 'react';
import {state} from '../../../shared';
import {AccountItem} from './AccountItem';
import {AccountModel} from '../../../models/AccountModel';

export class AccountList extends React.Component < {
  list : AccountModel[]
} > {

  render() {

    let items = this.props.list.map(x => <AccountItem account={x} key={x.id}/>);
    
    return (
      <div className="container-fluid row-list">
        {items}
      </div>
    );
  }
}
