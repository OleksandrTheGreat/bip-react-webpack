import * as React from 'react';
import {Account} from '../../../domain';

export class HomePageAccountItem extends React.Component<{account: Account}> {

  render() {
    return (
      <div className="row" key={this.props.account.id}>
        <div className="col">
          {this.props.account.name}
        </div>
        <div className="col">
          {this.props.account.balance} {this.props.account.currencyId}
        </div>
      </div>
    );
  }
}
