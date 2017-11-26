import * as React from 'react';
import { AccountModel } from '../../../models/AccountModel';

export class HomePageAccountItem extends React.Component<{account: AccountModel}> {

  render() {
    return (
      <div className="row">
        <div className="col">
          {this.props.account.name}
        </div>
        <div className="col text-right text-nowrap">
          {this.props.account.balance} {this.props.account.currency}
        </div>
      </div>
    );
  }
}
