import * as React from 'react';
import { SettingsList } from './SettingsList';
import { IocPage } from '../../common/Page';

export class SettingsPage extends IocPage<{}, {}> {

  render() {
    return (
      <SettingsList ioc={this.props.ioc} />
    );
  }
}
