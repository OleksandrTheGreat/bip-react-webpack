import * as React from 'react';
import {ABus} from 'abus';
import {state} from '../../../shared';
import {Header, IocPage} from '../../common/Page';
import {ShowError} from '../../../bus/commands';
import {MarkerModel} from '../../../models';
import {RefreshExpenseListPage, QueryExpenseList} from '../../../bus/commands/marker.commands';
import {ExpenseList} from './ExpenseList';

export class ExpenseListPage extends IocPage<{}, MarkerModel[]> {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    };

    this._bus.HandleLatest(RefreshExpenseListPage, () => this._refresh());

    this._refresh();
  }

  render() {

    if (!this.state.data)
      return null;

    return (
      <div>
        <Header onBack={this.onBack}>
          <i className="fa header-icon fa-minus"></i>
          {state.i18n.expenseList.title}
        </Header>
        <ExpenseList ioc={this.props.ioc} data={this.state.data} />
      </div>
    );
  }

  private _refresh() {
    this._bus.SendAsync(
      new QueryExpenseList(
        (list: MarkerModel[]) => {
          this.setState((state) => {
            return {
              data: list
            }
          });
        },
        error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))));
  }
}
