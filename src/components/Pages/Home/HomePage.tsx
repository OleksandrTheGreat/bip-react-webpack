import * as React from 'react';
import {ABus} from 'abus';
import {state} from '../../../shared';
import {AccountList} from './AccountList';
import {AccountModel} from '../../../models/AccountModel';
import {QueryDashboardAccounts} from '../../../bus/commands/account.commands';
import {ShowError} from '../../../bus/commands';
import {IocPage} from '../../common/Page';

class HomePageModel {
  public accounts: AccountModel[];
}

export class HomePage extends IocPage<HomePageModel> {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        accounts: []
      }
    };

    this._refreshAccounts();
  }

  render() {
    return (<AccountList list={this.state.data.accounts}/>);
  }

  private _refreshAccounts() {

    this._bus.SendAsync(
      new QueryDashboardAccounts(
        (accounts : AccountModel[]) => {
          this.setState((state) => {
            return {
              data: {accounts: accounts}
            }
          });
        },
        error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))
      )
    );
  }
}
