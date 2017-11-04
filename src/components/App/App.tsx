import * as React from 'react';

import {MainMenu} from '../MainMenu/MainMenu';
import {View} from '../Pages/View';

export class App extends React.Component {

  render() {
    return (
      <div className="app container">
        <MainMenu/>
        <View/>
      </div>
    );
  }
}
