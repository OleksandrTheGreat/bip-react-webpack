import * as React from 'react';
import { ioc } from './App-ioc';

import { HomePage } from '../Pages/Home/Home';

export class App extends React.Component {

  //public static iocContainer = container;

  render() {
    return (
      <div>
        <div>TEST</div>
        <HomePage/>
      </div>
    );
  }
}
