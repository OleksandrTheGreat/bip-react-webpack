import * as React from 'react';
import {state, ioc} from '../../../shared';
import {Currency} from '../../../domain';
import {Header} from '../Controls/Page/Header';
import {ICurrencyListService} from '../../../services/CurrencyListService';
import {CurrencyList} from './CurrencyList';

export class CurrencyListPage extends React.Component < {}, {currencyList: Currency[]} > {

  private _service: ICurrencyListService;

  constructor() {
    super();

    this._service = ioc.ICurrencyListService.resolve();

    this.state = {
      currencyList: []
    };

    this._refreshCurrency();
  }

  render() {
    return (
      <div>
        <Header>
          <i className="fa header-icon fa-usd"></i>
          {state.i18n.currencyList.title}
        </Header>
        <CurrencyList list={this.state.currencyList}/>
      </div>
    );
  }

  private _refreshCurrency() {
    this
      ._service
      .getAll()
      .then((currencyList) => {
        this.setState((state) => {
          return {
            ...state,
            currencyList: currencyList
          }
        });
      });
  }
}
