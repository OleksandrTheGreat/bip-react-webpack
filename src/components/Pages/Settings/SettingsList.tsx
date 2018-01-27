import * as React from 'react';
import {state, i18n, bus, pages} from '../../../shared';
import {ChangePage} from '../../../bus/commands';
import {SettingsItem} from './SettingsItem';

export class SettingsList extends React.Component {

  render() {

    return (
      <div className="container-fluid row-list settings-list">
        <SettingsItem 
          icon="fa-money" 
          title={state.i18n.settings.accounts} 
          onClick={() => {bus.Send(new ChangePage(pages.AccountsListPage.name))}}
        />
        <SettingsItem 
          icon="fa-usd" 
          title={state.i18n.settings.currency} 
          onClick={() => {bus.Send(new ChangePage(pages.CurrencyListPage.name))}}
        />
      </div>
    );
  }
}
