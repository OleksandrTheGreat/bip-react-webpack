import * as React from 'react';

import {Currency} from '../../../domain';

import {bus, state, pages} from '../../../shared';
import {ChangePage, Ask, ShowError, ChangeLanguage} from '../../../bus/commands';
import {DeleteCurrency, RefreshCurrencyListPage, UnDeleteCurrency} from '../../../bus/commands/currency.commands';

export class CurrencyItem extends React.Component<{currency: Currency}> {

  constructor() {
    super();

    this._onEditClick = this._onEditClick.bind(this);
    this._onDeleteClick = this._onDeleteClick.bind(this);
    this._onUnDeleteClick = this._onUnDeleteClick.bind(this);
  }

  render() {

    const editButtonContent = this.props.currency.id == null
      ? <i className="fa fa-plus"></i>
      : <i className="fa fa-pencil"></i>;

    const deleteButton = this.props.currency.id == null || this.props.currency.isDeleted
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

    const info = this.props.currency.isDeleted
      ? <div className="col va-middle">
          <del><em>{this.props.currency.name || state.i18n.currency.createTitle}</em></del>
          <div>
            <small>
              <del><em>{this.props.currency.description}</em></del>
            </small>
          </div>
        </div>
      : <div className="col va-middle">
          {this.props.currency.name || state.i18n.currency.createTitle}
          <div>
            <small>
              {this.props.currency.description}
            </small>
          </div>
        </div>;

    const undoButton = this.props.currency.isDeleted
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
        <div className="col-2 col-md-auto">
          <button 
            type="button"
            className="btn btn-primary"
            onClick={this._onEditClick}
            title={state.i18n.common.edit}
          >
            {editButtonContent}
          </button>
          {deleteButton}
          {undoButton}
        </div>
      </div>
    );
  }

  _onEditClick() {
    bus.SendAsync(new ChangePage(pages.CurrencyPage.name, {currency: this.props.currency}));
  }

  _onDeleteClick() {
    bus.SendAsync(
      new Ask(
        state.i18n.currency.deleteQuestion.replace('{0}', this.props.currency.name), 
        (answer: boolean) => {
          bus.SendAsync(
            new DeleteCurrency(
              this.props.currency, 
              () => {
                bus.SendAsync(new RefreshCurrencyListPage());
              }, 
              (error) => {
                bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
              }));
       }));
  }

  _onUnDeleteClick() {
    bus.SendAsync(
      new Ask(
        state.i18n.currency.undeleteQuestion.replace('{0}', this.props.currency.name), 
        (answer: boolean) => {
          bus.SendAsync(
            new UnDeleteCurrency(
              this.props.currency, 
              () => {
                bus.SendAsync(new RefreshCurrencyListPage());
              }, 
              (error) => {
                bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
              }));
       }));
  }
}
