import * as React from 'react';
import {i18n} from '../../../shared/services';

export class SettingsPage extends React.Component {

  render() {
    return (
      <div>{i18n.current.menu.settings}</div>
    );
  }
}
