import * as React from 'react';
import {state} from '../../../shared';
import {TransactionPageHeader} from './TransactionPageHeader';

export class TransactionPage extends React.Component {

  render() {
    return (
      <div>
        <TransactionPageHeader />
      </div>
    );
  }
}
