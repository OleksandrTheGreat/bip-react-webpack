import * as React from 'react';
import { ioc } from '../../App/App-ioc';

export class HomePage extends React.Component {

  constructor(){
    super();

    console.log(ioc);
  }

  render() {
    return (
      <div>Home page</div>
    );
  }
}
