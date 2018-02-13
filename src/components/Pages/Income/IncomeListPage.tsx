import * as React from 'react';
import {ABus} from 'abus';
import {state, ioc} from '../../../shared';
import {Header} from '../../common/Page';
import {ShowError} from '../../../bus/commands';
import {MarkerModel} from '../../../models';
import {QueryIncomeList, RefreshIncomeListPage} from '../../../bus/commands/marker.commands';
import { IncomeList } from './IncomeList';

export class IncomeListPage extends React.Component < {}, {incomeList: MarkerModel[]} > {

  private _bus = ioc.resolve<ABus>(ABus);

  constructor() {
    super();

    this.state = {
      incomeList: []
    };

    this._bus.Handle(RefreshIncomeListPage, () => this._refresh());

    this._refresh();
  }

  render() {
    return (
      <div>
        <Header>
          <i className="fa header-icon fa-plus"></i>
          {state.i18n.incomeList.title}
        </Header>
        <IncomeList list={this.state.incomeList} />
      </div>
    );
  }

  private _refresh() {
    this._bus.SendAsync(
      new QueryIncomeList(
        (list: MarkerModel[]) => {
          this.setState((state) => {
            return {
              ...state,
              incomeList: list
            }
          });
        },
        error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))));
  }
}
