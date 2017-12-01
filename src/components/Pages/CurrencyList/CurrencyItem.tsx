import * as React from 'react';
import {Currency} from '../../../domain';
import {bus} from '../../../shared/index';
import {ChangePage} from '../../../shared/commands';
import { CurrencyPage } from '../Currency/CurrencyPage';

export class CurrencyItem extends React.Component<{currency: Currency}> {

  constructor() {
    super();
    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick() {
    bus.SendAsync(new ChangePage(CurrencyPage, {currency: this.props.currency}));
  }

  render() {

    return (
      <div className="row">
        <div className="col va-middle">
          {this.props.currency.name}
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
          >
            <i className="fa fa-pencil"></i>
          </button>
        </div>
      </div>
    );
  }
}
