import * as React from 'react';
import { AccountModel } from '../../../models/AccountModel';

export class HomePageAccountItem extends React.Component<{account: AccountModel}> {

  render() {
    return (
      <div className="row" key={this.props.account.id}>
        <div className="col">
          {this.props.account.name}
        </div>
        <div className="col">
          {this.props.account.balance} {this.props.account.currency}
        </div>
      </div>
    );
  }
}
