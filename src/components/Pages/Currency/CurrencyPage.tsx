import * as React from 'react';
import {state} from '../../../shared';
import {Header} from '../Controls/Page/Header';
import {CurrencyForm} from './CurrencyForm';
import {Currency} from '../../../domain/Currency';

export class CurrencyPage extends React.Component < {
  data : {
    currency: Currency
  }
} > {

  render() {

    let title = this.props.data.currency.id
      ? state.i18n.currency.editTitle
      : state.i18n.currency.createTitle;

    return (
      <div>
        <Header>
          <i className="fa header-icon fa-usd"></i>
          {title}
        </Header>
        <CurrencyForm currency={this.props.data.currency} />
      </div>
    );
  }
}
