import * as React from 'react';
import {ABus} from 'abus';
import {state, ioc} from '../../../shared';
import {Header} from '../../common/Page/Header';
import {ShowError} from '../../../bus/commands';
import {MarkerModel} from '../../../models';

export class ExpenseListPage extends React.Component < {}, {expenseList: MarkerModel[]} > {

  private _bus = ioc.resolve<ABus>(ABus);

  constructor() {
    super();

    this.state = {
      expenseList: []
    };

    //this._bus.Handle(RefreshExpenseListPage, () => this._refresh());

    this._refresh();
  }

  render() {
    return (
      <div>
        <Header>
          <i className="fa header-icon fa-minus"></i>
          {state.i18n.expenseList.title}
        </Header>
      </div>
    );
  }

  private _refresh() {
    // this._bus.SendAsync(
    //   new QueryCurrencyList(
    //     (list: CurrencyModel[]) => {
    //       this.setState((state) => {
    //         return {
    //           ...state,
    //           currencyList: list
    //         }
    //       });
    //     },
    //     (error) => {
    //       this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
    //     }));
  }
}
