import * as React from 'react';
import {state, ioc} from '../../shared';
import {Error} from './Error';
import {Menu} from '../Menu/Menu';
import {View} from '../Pages/View';
import {AskModal, ErrorModal} from '../Modals';

export class App extends React.Component < {}, {
  error: any,
  info: any
} > {

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

    if (!state || !ioc)
      return null;

    return (
      <div className="app">
        <Error error={this.state.error} info={this.state.info}/>
        <AskModal ioc={ioc}/>
        <ErrorModal ioc={ioc}/>
        <Menu ioc={ioc}/>
        <View ioc={ioc}/>
      </div>
    );
  }
}
