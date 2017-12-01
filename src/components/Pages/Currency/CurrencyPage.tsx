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
    return (
      <div>
        <Header>
        </Header>
        <CurrencyForm currency={this.props.data.currency} />
      </div>
    );
  }
}
