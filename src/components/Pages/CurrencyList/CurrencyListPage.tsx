import * as React from 'react';
import {state} from '../../../shared';
import {Header} from '../Header';

export class CurrencyListPage extends React.Component {

  render() {
    return (
      <div>
        <Header>
          <i className="fa settings-icon fa-usd"></i> {state.i18n.currencyList.title}
        </Header>
      </div>
    );
  }
}
