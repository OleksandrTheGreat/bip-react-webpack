import * as React from 'react';

import {Error} from './Error';
import {Menu} from '../Menu/Menu';
import {View} from '../Pages';
import { AskModal } from '../Modals/AskModal';

export class App extends React.Component< {}, {error: any, info: any} > {

  constructor() {
    super();

    this.state = {
      error: null,
      info: null
    };
  }

  componentDidCatch(error, info) {
    this.setState({error: error, info: info});
  }

  render() {
    return (
      <div className="app">
        <Error error={this.state.error} info={this.state.info} />
        <AskModal />
        <Menu/>
        <View/>
      </div>
    );
  }
}
