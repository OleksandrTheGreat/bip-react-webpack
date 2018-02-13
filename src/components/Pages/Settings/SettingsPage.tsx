import * as React from 'react';
import { SettingsList } from './SettingsList';
import { IocComponent } from '../../common';

export class SettingsPage extends IocComponent<{}, {}> {

  render() {
    return (
      <SettingsList ioc={this.props.ioc} />
    );
  }
}
