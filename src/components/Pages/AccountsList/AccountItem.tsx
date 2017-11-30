import * as React from 'react';
import {Account} from '../../../domain';

export class AccountItem extends React.Component<{account: Account}> {

  render() {
    return (
      <div className="row">
        <div className="col">
          {this.props.account.name}
          <div>
            <small>
              {this.props.account.description}
            </small>
          </div>
        </div>
        <div className="col-3 text-right">
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
