import * as React from 'react';

import {Currency} from '../../../domain';

import {bus, state, pages} from '../../../shared';
import {ChangePage, Ask, ShowError, ChangeLanguage} from '../../../bus/commands';
import {DeleteCurrency, RefreshCurrencyListPage} from '../../../bus/commands/currency.commands';

export class CurrencyItem extends React.Component<{currency: Currency}> {

  constructor() {
    super();

    this._onEditClick = this._onEditClick.bind(this);
    this._onDeleteClick = this._onDeleteClick.bind(this);
  }

  _onEditClick() {
    bus.SendAsync(new ChangePage(pages.CurrencyPage.name, {currency: this.props.currency}));
  }

  _onDeleteClick() {
    bus.SendAsync(
      new Ask(state.i18n.currency.deleteQuestion, 
        (answer: boolean) => {
          bus.SendAsync(
            new DeleteCurrency(
              this.props.currency, 
              () => {
                bus.SendAsync(new RefreshCurrencyListPage());
              }, 
              (error) => {
                bus.SendAsync(new ShowError(error));
              }));
       }));
  }

  render() {

    const editTitle = this.props.currency.id == null
      ? <i className="fa fa-plus"></i>
      : <i className="fa fa-pencil"></i>;

    const deleteButton = this.props.currency.id == null
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

    return (
      <div className="row">
        <div className="col va-middle">
          {this.props.currency.name || state.i18n.currency.createTitle}
          <div>
            <small>
              {this.props.currency.description}
            </small>
          </div>
        </div>
        <div className="col-2 col-md-auto">
          <button 
            type="button"
            className="btn btn-primary"
            onClick={this._onEditClick}
            title={state.i18n.common.edit}
          >
            {editTitle}
          </button>
          {deleteButton}
        </div>
      </div>
    );
  }
}
