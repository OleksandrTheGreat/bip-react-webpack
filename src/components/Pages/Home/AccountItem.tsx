import * as React from 'react';
import { AccountModel } from '../../../models/AccountModel';

export class AccountItem extends React.Component<{account: AccountModel}> {

  render() {
    return (
      <div className="row">
        <div className="col">
          {this.props.account.name}
        </div>
        <div className="col text-right text-nowrap">
          {this.props.account.balanceView} {this.props.account.currencyName}
        </div>
      </div>
    );
  }
}
