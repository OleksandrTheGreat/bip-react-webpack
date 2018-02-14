import * as React from 'react';
import {state} from '../../../shared';
import {TransactionListPageHeader} from './TransactionListPageHeader';
import {TransactionList} from './TransactionList';
import {IocPage} from '../../common/Page';

export class TransactionListPage extends IocPage<{}, {}> {

  render() {
    return (
      <div>
        <TransactionListPageHeader ioc={this.props.ioc}/>
        <TransactionList />
      </div>
    );
  }
}
