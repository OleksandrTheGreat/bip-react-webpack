import * as React from 'react';
import {state, bus} from '../../shared';
import { ChangePage } from '../../bus/commands/index';
import { HomePage } from '../Pages/index';

export class MenuBrandIcon extends React.Component {
  render() {
    return (
      <a 
        href="#" 
        className="navbar-brand" 
        onClick={() => {
          bus.Send(new ChangePage(HomePage))
        }}
        title={state.i18n.menu.title}
      >
        BiP
      </a>
    );
  }
}
