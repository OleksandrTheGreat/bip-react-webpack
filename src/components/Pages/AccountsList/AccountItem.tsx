import * as React from 'react';
import {AccountModel} from '../../../models/AccountModel';
import {state} from '../../../shared';
import {ChangePage} from '../../../bus/commands';
import {pages} from '../../../shared/pages';
import {bus} from '../../../shared/bus';

export class AccountItem extends React.Component<{account: AccountModel}> {

  constructor(props){
    super(props);

    this._onEditClick = this._onEditClick.bind(this);
  }

  render() {

    const editButton = this.props.account.id == null
    ? <button 
        type="button"
        className="btn btn-primary"
        title={state.i18n.common.edit}
        onClick={this._onEditClick}
      >
        <i className="fa fa-plus"></i>
      </button>
    :
      <button 
        type="button"
        className="btn btn-primary"
        title={state.i18n.common.edit}
        onClick={this._onEditClick}
      >
        <i className="fa fa-pencil"></i>
      </button>;

    return (
      <div className="row">
        <div className="col va-middle">
          {this.props.account.name || state.i18n.account.createTitle}
          <div>
            <small>
              {this.props.account.description}
            </small>
          </div>
        </div>
        <div className="col text-right va-middle">
          {this.props.account.balanceView} {this.props.account.currency} 
        </div>
        <div className="col-2 col-md-auto">
          {editButton}
        </div>
      </div>
    );
  }

  _onEditClick() {
    bus.SendAsync(new ChangePage(pages.AccountPage.name, {account: this.props.account}));
  }
}
