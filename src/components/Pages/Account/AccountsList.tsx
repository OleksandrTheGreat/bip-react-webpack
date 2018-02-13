import * as React from 'react';
import {state} from '../../../shared';
import {AccountItem} from './AccountItem';
import {AccountModel} from '../../../models/AccountModel';
import {IocComponent} from '../../common';

export class AccountsList extends IocComponent<AccountModel[], {}> {

  render() {

    let availableAccounts = [
      new AccountModel(null, null, null),
    ];

    let deletedAccounts = [];

    this.props.data.forEach(x => {
      if(x.isDeleted) 
        deletedAccounts.push(x);
      else
        availableAccounts.push(x);
    });

    let availableItems = availableAccounts.map(x => <AccountItem ioc={this.props.ioc} data={x} key={x.id}/>);
    let deletedItems = deletedAccounts.map(x => <AccountItem ioc={this.props.ioc} data={x} key={x.id}/>);

    return (
      <div className="container-fluid row-list">
        {availableItems}
        {deletedItems}
      </div>
    );
  }
}
