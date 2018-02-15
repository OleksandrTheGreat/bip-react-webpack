import * as React from 'react';
import {state, ioc} from '../../../shared';
import {Header, IocPage} from '../../common/Page';
import {ShowError} from '../../../bus/commands';
import {MarkerModel} from '../../../models';
import {QueryIncomeList, RefreshIncomeListPage} from '../../../bus/commands/marker.commands';
import {IncomeList} from './IncomeList';

export class IncomeListPage extends IocPage<{}, MarkerModel[]> {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    };

    this._bus.Handle(
      RefreshIncomeListPage, 
      () => this._refresh(),
      'IncomeListPage.RefreshIncomeListPage'
    );

    this._refresh();
  }

  render() {

    if (!this.state.data)
      return null;

    return (
      <div>
        <Header onBack={this.onBack}>
          <i className="fa header-icon fa-plus"></i>
          {state.i18n.incomeList.title}
        </Header>
        <IncomeList ioc={this.props.ioc} data={this.state.data} />
      </div>
    );
  }

  private _refresh() {
    this._bus.SendAsync(
      new QueryIncomeList(
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
