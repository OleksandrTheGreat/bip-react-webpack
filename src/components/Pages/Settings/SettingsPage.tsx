import * as React from 'react';
import {state} from '../../../shared';

export class SettingsPage extends React.Component {

  render() {
    return (
      <div>{state.i18n.menu.settings}</div>
    );
  }
}
