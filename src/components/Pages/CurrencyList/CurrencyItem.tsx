import * as React from 'react';
import {ABus} from 'abus';
import {ioc, state, pages} from '../../../shared';
import {ChangePage, Ask, ShowError, ChangeLanguage} from '../../../bus/commands';
import {DeleteCurrency, RefreshCurrencyListPage, RestoreCurrency} from '../../../bus/commands/currency.commands';
import {CurrencyModel} from '../../../models';

export class CurrencyItem extends React.Component<{currency: CurrencyModel}> {

  private _bus = ioc.resolve<ABus>(ABus);

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

    const editButton = (
      <button 
        type="button"
        className="btn btn-primary"
        onClick={this._onEditClick}
        title={state.i18n.common.edit}
      >
        {editButtonContent}
      </button>);

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
      ? <div className="col">
          <del><em>{this.props.currency.name || state.i18n.currency.createTitle}</em></del>
          <div>
            <small>
              <del><em>{this.props.currency.description}</em></del>
            </small>
          </div>
        </div>
      : <div className="col">
          {this.props.currency.name || state.i18n.currency.createTitle}
          <div>
            <small>
              {this.props.currency.description}
            </small>
          </div>
        </div>;

    const restoreButton = this.props.currency.isDeleted
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
          {editButton}
          {deleteButton}
          {restoreButton}
        </div>
      </div>
    );
  }

  _onEditClick() {
    this._bus.SendAsync(new ChangePage(pages.CurrencyPage.name, {currency: this.props.currency}));
  }

  _onDeleteClick() {
    this._bus.SendAsync(
      new Ask(
        state.i18n.currency.deleteQuestion.replace('{0}', this.props.currency.name), 
        (answer: boolean) => {
          this._bus.SendAsync(
            new DeleteCurrency(
              this.props.currency.id, 
              () => {
                this._bus.SendAsync(new RefreshCurrencyListPage());
              }, 
              (error) => {
                this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
              }));
       }));
  }

  _onUnDeleteClick() {
    this._bus.SendAsync(
      new Ask(
        state.i18n.currency.restoreQuestion.replace('{0}', this.props.currency.name), 
        (answer: boolean) => {
          this._bus.SendAsync(
            new RestoreCurrency(
              this.props.currency.id, 
              () => {
                this._bus.SendAsync(new RefreshCurrencyListPage());
              }, 
              (error) => {
                this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
              }));
       }));
  }
}
