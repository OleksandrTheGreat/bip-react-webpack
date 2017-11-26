import * as React from 'react';
import {state, i18n} from '../../../shared';
import { SettingsItem } from './SettingsItem';

export class SettingsList extends React.Component {

  render() {

    let currencyTitle = <span><i className="fa fa-usd"></i> {state.i18n.settings.currency}</span>;
    
    return (
      <div className="container-fluid row-list settings-list">
        <SettingsItem icon="fa-money" title={state.i18n.settings.accounts} />
        <SettingsItem icon="fa-usd" title={state.i18n.settings.currency} />
      </div>
    );
  }
}
