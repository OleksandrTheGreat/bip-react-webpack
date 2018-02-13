import * as React from 'react';
import {ABus} from 'abus';
import {state} from '../../../shared';
import {Header} from '../../common/Page';
import {AccountsList} from './AccountsList';
import {AccountModel} from '../../../models/AccountModel';
import {QueryAccountList, RefreshAccountsListPage} from '../../../bus/commands/account.commands';
import {ShowError} from '../../../bus/commands';
import {IocComponent} from '../../common';

export class AccountsListPage extends IocComponent <{}, AccountModel[]> {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    };

    this._bus.Handle(RefreshAccountsListPage, () => this._refreshAccount());

    this._refreshAccount();
  }

  render() {

    if (!this.state.data)
      return null;

    return (
      <div>
        <Header>
          <i className="fa header-icon fa-money"></i>
          {state.i18n.accountsList.title}
        </Header>
        <AccountsList ioc={this.props.ioc} data={this.state.data}/>
      </div>
    );
  }

  private _refreshAccount() {
    this._bus.SendAsync(new QueryAccountList(
      (accounts) => {
        this.setState((state) => {
          return {
            data: accounts
          }
        });
      },
      (error) => {
        this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
      }
    ));
  }
}
