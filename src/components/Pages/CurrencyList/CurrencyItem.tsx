import * as React from 'react';

import {Currency} from '../../../domain';

import {bus, state, pages} from '../../../shared';
import {ChangePage} from '../../../bus/commands';

export class CurrencyItem extends React.Component<{currency: Currency}> {

  constructor() {
    super();
    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick() {
    bus.SendAsync(new ChangePage(pages.CurrencyPage.name, {currency: this.props.currency}));
  }

  render() {

    const editButton = this.props.currency.id == null
      ? <i className="fa fa-plus"></i>
      : <i className="fa fa-pencil"></i>;

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
            onClick={this.onEditClick}
            title={state.i18n.common.edit}
          >
            {editButton}
          </button>
        </div>
      </div>
    );
  }
}
