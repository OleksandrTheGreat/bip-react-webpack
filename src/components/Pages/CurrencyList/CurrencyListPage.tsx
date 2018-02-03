import * as React from 'react';
import {state, ioc, bus} from '../../../shared';
import {Header} from '../../common/Page/Header';
import {CurrencyList} from './CurrencyList';
import { QueryCurrencyList, RefreshCurrencyListPage } from '../../../bus/commands/currency.commands';
import { ShowError } from '../../../bus/commands/index';
import { CurrencyModel } from '../../../models';

export class CurrencyListPage extends React.Component < {}, {currencyList: CurrencyModel[]} > {

  constructor() {
    super();

    this.state = {
      currencyList: []
    };

    bus.Handle(RefreshCurrencyListPage, () => {
      this._refreshCurrency()
    });

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
    bus.SendAsync(
      new QueryCurrencyList(
        (list: CurrencyModel[]) => {
          this.setState((state) => {
            return {
              ...state,
              currencyList: list
            }
          });
        },
        (error) => {
          bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
        }));
  }
}
