import * as React from 'react';
import {AccountModel} from '../../../models/AccountModel';

export class AccountItem extends React.Component<{account: AccountModel}> {

  render() {
    return (
      <div className="row">
        <div className="col va-middle">
          {this.props.account.name}
          <div>
            <small>
              {this.props.account.description}
            </small>
          </div>
        </div>
        <div className="col text-right va-middle">
          {this.props.account.balance} {this.props.account.currency} 
        </div>
        <div className="col-2 col-md-auto">
          <button 
            type="button"
            className="btn btn-primary"
          >
            <i className="fa fa-pencil"></i>
          </button>
        </div>
      </div>
    );
  }
}
