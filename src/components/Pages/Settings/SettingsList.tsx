import * as React from 'react';
import {ABus} from 'abus';
import {state, i18n, ioc, pages} from '../../../shared';
import {ChangePage} from '../../../bus/commands';
import {SettingsItem} from './SettingsItem';

export class SettingsList extends React.Component {

  private _bus = ioc.resolve<ABus>(ABus);

  render() {

    return (
      <div className="container-fluid row-list settings-list">
        <SettingsItem 
          icon="fa-money" 
          title={state.i18n.settings.accounts} 
          onClick={() => this._bus.Send(new ChangePage(pages.AccountsListPage.name))}
        />
        <SettingsItem 
          icon="fa-usd" 
          title={state.i18n.settings.currency} 
          onClick={() => this._bus.Send(new ChangePage(pages.CurrencyListPage.name))}
        />
      </div>
    );
  }
}
