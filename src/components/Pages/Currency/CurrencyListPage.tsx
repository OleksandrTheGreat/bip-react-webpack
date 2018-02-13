import * as React from 'react';
import {ABus} from 'abus';
import {state} from '../../../shared';
import {Header} from '../../common/Page';
import {CurrencyList} from './CurrencyList';
import {QueryCurrencyList, RefreshCurrencyListPage} from '../../../bus/commands/currency.commands';
import {ShowError} from '../../../bus/commands';
import {CurrencyModel} from '../../../models';
import {IocComponent} from '../../common';

export class CurrencyListPage extends IocComponent<{}, CurrencyModel[]> {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    };

    this._bus.Handle(RefreshCurrencyListPage, () => this._refreshCurrency());

    this._refreshCurrency();
  }

  render() {

    if (!this.state.data)
      return null;

    return (
      <div>
        <Header>
          <i className="fa header-icon fa-usd"></i>
          {state.i18n.currencyList.title}
        </Header>
        <CurrencyList ioc={this.props.ioc} data={this.state.data}/>
      </div>
    );
  }

  private _refreshCurrency() {
    this._bus.SendAsync(
      new QueryCurrencyList(
        (list: CurrencyModel[]) => {
          this.setState((state) => {
            return {
              data: list
            }
          });
        },
        error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))));
  }
}
