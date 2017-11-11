import * as React from 'react';
import {state} from '../../shared/services';

export class MenuBrandIcon extends React.Component {
  render() {
    return (
      <a href="#" className="navbar-brand" title={state.i18n.menu.title}>
        BiP
      </a>
    );
  }
}
