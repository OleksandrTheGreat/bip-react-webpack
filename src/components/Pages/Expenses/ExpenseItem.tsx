import * as React from 'react';
import {ABus} from 'abus';
import {ioc, state, pages} from '../../../shared';
import {MarkerModel} from '../../../models';
import {ChangePage, Ask, ShowError} from '../../../bus/commands';
import {RefreshExpenseListPage, DeleteMarker, RestoreMarker } from '../../../bus/commands/marker.commands';
import { RefreshAccountsListPage } from '../../../bus/commands/account.commands';

export class ExpenseItem extends React.Component<{expense: MarkerModel}> {
  
  private _bus = ioc.resolve<ABus>(ABus);

  constructor() {
    super();

    this._onEditClick = this._onEditClick.bind(this);
    this._onDeleteClick = this._onDeleteClick.bind(this);
    this._onRestoreClick = this._onRestoreClick.bind(this);
  }

  render() {

    const editButtonContent = this.props.expense.id == null
      ? <i className="fa fa-plus"></i>
      : <i className="fa fa-pencil"></i>;

    const editButton = (
      <button 
        type="button"
        className="btn btn-primary"
        onClick={this._onEditClick}
        title={state.i18n.common.edit}
      >
        {editButtonContent}
      </button>);

    const deleteButton = this.props.expense.id == null || this.props.expense.isDeleted
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

    const info = this.props.expense.isDeleted
      ? <div className="col">
          <del><em>{this.props.expense.name || state.i18n.expense.createTitle}</em></del>
        </div>
      : <div className="col">
          {this.props.expense.name || state.i18n.expense.createTitle}
        </div>;

    const restoreButton = this.props.expense.isDeleted
      ? <div className="d-inline-block">
          &nbsp;
          <button 
            type="button"
            className="btn btn-success"
            onClick={this._onRestoreClick}
            title={state.i18n.common.undelete}
          >
            <i className="fa fa-undo"></i>
          </button>
        </div>
      : null;

    return (
      <div className="row">
        {info}
        <div className="col-2 col-md-auto">
          {editButton}
          {deleteButton}
          {restoreButton}
        </div>
      </div>
    );
  }

  _onEditClick() {
    this._bus.SendAsync(new ChangePage(pages.ExpensePage.name, this.props.expense));
  }

  _onDeleteClick() {
    this._bus.SendAsync(
      new Ask(
        state.i18n.expense.deleteQuestion.replace('{0}', this.props.expense.name), 
        (answer: boolean) => {

          if (!answer)
            return;

          this._bus.SendAsync(
            new DeleteMarker(
              this.props.expense.id, 
              () => this._bus.SendAsync(new RefreshExpenseListPage()), 
              error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))));
       }));
  }

  _onRestoreClick() {
    this._bus.SendAsync(
      new Ask(
        state.i18n.expense.restoreQuestion.replace('{0}', this.props.expense.name), 
        (answer: boolean) => {

          if (!answer)
            return;

          this._bus.SendAsync(
            new RestoreMarker(
              this.props.expense.id, 
              () => this._bus.SendAsync(new RefreshExpenseListPage()), 
              error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))));
       }));
  }
}
