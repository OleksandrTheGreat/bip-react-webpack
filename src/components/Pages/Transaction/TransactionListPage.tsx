import * as React from 'react';
import {state} from '../../../shared';
import {TransactionListPageHeader} from './TransactionListPageHeader';
import {TransactionList} from './TransactionList';

export class TransactionListPage extends React.Component {

  render() {
    return (
      <div>
        <TransactionListPageHeader />
        <TransactionList />
      </div>
    );
  }
}
