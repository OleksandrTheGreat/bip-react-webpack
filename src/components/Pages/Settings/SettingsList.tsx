import * as React from 'react';
import {state, i18n, pages} from '../../../shared';
import {ChangePage} from '../../../bus/commands';
import {SettingsItem} from './SettingsItem';
import { IocComponent } from '../../common';

export class SettingsList extends IocComponent<{}, {}> {

  render() {

    return (
      <div className="container-fluid row-list settings-list">
        <SettingsItem 
          icon="fa fa-money" 
          title={state.i18n.settings.accounts} 
          onClick={() => this._bus.Send(new ChangePage(pages.AccountsListPage.name))}
        />
        <SettingsItem 
          icon="fa fa-usd" 
          title={state.i18n.settings.currency} 
          onClick={() => this._bus.Send(new ChangePage(pages.CurrencyListPage.name))}
        />
        <SettingsItem 
          icon="fa fa-plus" 
          title={state.i18n.settings.incomes} 
          onClick={() => this._bus.Send(new ChangePage(pages.IncomeListPage.name))}
        />
        <SettingsItem 
          icon="fa fa-minus" 
          title={state.i18n.settings.expenses} 
          onClick={() => this._bus.Send(new ChangePage(pages.ExpenseListPage.name))}
        />
      </div>
    );
  }
}
