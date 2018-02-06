import * as React from 'react';
import {ABus} from 'abus';
import {state, ioc} from '../../../shared';
import {Header} from '../../common/Page/Header';
import {CurrencyList} from './CurrencyList';
import {QueryCurrencyList, RefreshCurrencyListPage} from '../../../bus/commands/currency.commands';
import {ShowError} from '../../../bus/commands';
import {CurrencyModel} from '../../../models';

export class CurrencyListPage extends React.Component < {}, {currencyList: CurrencyModel[]} > {

  private _bus = ioc.resolve<ABus>(ABus);

  constructor() {
    super();

    this.state = {
      currencyList: []
    };

    this._bus.Handle(RefreshCurrencyListPage, () => this._refreshCurrency());

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
    this._bus.SendAsync(
      new QueryCurrencyList(
        (list: CurrencyModel[]) => {
          this.setState((state) => {
            return {
              ...state,
              currencyList: list
            }
          });
        },
        error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))));
  }
}
