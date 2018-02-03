import * as React from 'react';
import {AccountModel} from '../../../models/AccountModel';
import {state, bus, pages} from '../../../shared';
import {ChangePage, Ask, ShowError} from '../../../bus/commands';
import {DeleteAccount, RefreshAccountsListPage, ResoreAccount} from '../../../bus/commands/account.commands';

export class AccountItem extends React.Component<{account: AccountModel}> {

  constructor(props){
    super(props);

    this._onEditClick = this._onEditClick.bind(this);
    this._onDeleteClick = this._onDeleteClick.bind(this);
    this._onUnDeleteClick = this._onUnDeleteClick.bind(this);    
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
      : <button 
          type="button"
          className="btn btn-primary"
          title={state.i18n.common.edit}
          onClick={this._onEditClick}
        >
          <i className="fa fa-pencil"></i>
        </button>;

      const deleteButton = this.props.account.id == null || this.props.account.isDeleted
        ? null
        : <div className="d-inline-block">
            &nbsp;
            <button 
              type="button"
              className="btn btn-danger"
              onClick={this._onDeleteClick}
              title={state.i18n.common.delete}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>;

    const info = this.props.account.isDeleted
      ? <div className="col">
          <del>
            <em>
              {this.props.account.name || state.i18n.account.createTitle}
              <div>
                <small>
                  {this.props.account.description}
                </small>
              </div>
            </em>
          </del>
        </div>
      : <div className="col">
          {this.props.account.name || state.i18n.account.createTitle}
          <div>
            <small>
              {this.props.account.description}
            </small>
          </div>
        </div>;

    const balance = this.props.account.isDeleted || !this.props.account.id
      ? null
      : this.props.account.balanceView + ' ' + this.props.account.currencyName;

    const restoreButton = this.props.account.isDeleted
      ? <div className="d-inline-block">
          &nbsp;
          <button 
            type="button"
            className="btn btn-success"
            onClick={this._onUnDeleteClick}
            title={state.i18n.common.undelete}
          >
            <i className="fa fa-undo"></i>
          </button>
        </div>
      : null;

    return (
      <div className="row">
        {info}
        <div className="col text-right">
          {balance}
        </div>
        <div className="col-2 col-md-auto">
          {editButton}
          {deleteButton}
          {restoreButton}
        </div>
      </div>
    );
  }

  _onEditClick() {
    bus.SendAsync(new ChangePage(pages.AccountPage.name, {account: this.props.account}));
  }

  _onDeleteClick() {
    bus.SendAsync(
      new Ask(
        state.i18n.account.deleteQuestion.replace('{0}', this.props.account.name).replace('{1}', this.props.account.currencyName), 
        (answer: boolean) => {
          bus.SendAsync(
            new DeleteAccount(
              this.props.account.id, 
              () => {
                bus.SendAsync(new RefreshAccountsListPage());
              }, 
              (error) => {
                bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
              }));
       }));
  }

  _onUnDeleteClick() {
    bus.SendAsync(
      new Ask(
        state.i18n.account.restoreQuestion.replace('{0}', this.props.account.name).replace('{1}', this.props.account.currencyName), 
        (answer: boolean) => {
          bus.SendAsync(
            new ResoreAccount(
              this.props.account.id, 
              () => {
                bus.SendAsync(new RefreshAccountsListPage());
              }, 
              (error) => {
                bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
              }));
       }));
  }
}
