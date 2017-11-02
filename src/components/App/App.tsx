import * as React from 'react';

import {i18n} from '../../i18n/i18n';

import {MainMenu} from '../MainMenu/MainMenu';
import {Pages} from '../Pages/Pages';

export class App extends React.Component {
  render() {
    return (
      <div className="app container">
        <MainMenu/>
        <Pages/>
      </div>
    );
  }
}
