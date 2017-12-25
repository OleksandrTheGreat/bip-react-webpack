import * as React from 'react';
import {state, i18n, bus} from '../../../shared';
import {ChangePage} from '../../../commands';
import {SettingsItem} from './SettingsItem';
import {CurrencyListPage} from '../CurrencyList/CurrencyListPage';
import {AccountsListPage} from '../AccountsList/AccountsListPage';

export class SettingsList extends React.Component {

  render() {

    return (
      <div className="container-fluid row-list settings-list">
        <SettingsItem 
          icon="fa-money" 
          title={state.i18n.settings.accounts} 
          onClick={() => {bus.Send(new ChangePage(AccountsListPage))}}
        />
        <SettingsItem 
          icon="fa-usd" 
          title={state.i18n.settings.currency} 
          onClick={() => {bus.Send(new ChangePage(CurrencyListPage))}}
        />
      </div>
    );
  }
}
