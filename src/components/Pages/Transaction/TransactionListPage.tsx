import * as React from 'react';
import {state} from '../../../shared';
import {TransactionListPageHeader} from './TransactionListPageHeader';
import {TransactionList} from './TransactionList';
import {IocComponent} from '../../common';

export class TransactionListPage extends IocComponent<{}, {}> {

  render() {
    return (
      <div>
        <TransactionListPageHeader ioc={this.props.ioc}/>
        <TransactionList />
      </div>
    );
  }
}
