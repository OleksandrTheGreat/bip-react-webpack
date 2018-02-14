import * as React from 'react';
import {ABus} from 'abus';
import {state} from '../../../shared';
import {AccountList} from './AccountList';
import {AccountModel} from '../../../models/AccountModel';
import {QueryDashboardAccounts} from '../../../bus/commands/account.commands';
import {ShowError} from '../../../bus/commands';
import {IocPage} from '../../common/Page';

export class HomePage extends IocPage<any, AccountModel[]> {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    };

    this._refreshAccounts();
  }

  render() {

    if (!this.state.data)
      return null;

    return (<AccountList list={this.state.data}/>);
  }

  private _refreshAccounts() {

    this._bus.SendAsync(
      new QueryDashboardAccounts(
        (accounts : AccountModel[]) => {
          this.setState((state) => {
            return {
              data: accounts
            }
          });
        },
        error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))
      )
    );
  }
}
