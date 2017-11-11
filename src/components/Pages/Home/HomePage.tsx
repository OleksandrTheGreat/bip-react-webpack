import * as React from 'react';
import {state} from '../../../shared';

export class HomePage extends React.Component {

  render() {
    return (
      <div>{state.i18n.menu.home}</div>
    );
  }
}
