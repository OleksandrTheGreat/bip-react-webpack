import * as React from 'react';

import {Menu} from '../Menu/Menu';
import {View} from '../Pages/View';

export class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Menu/>
        <View/>
      </div>
    );
  }
}
