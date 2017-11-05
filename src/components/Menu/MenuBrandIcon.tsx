import * as React from 'react';
import {i18n} from '../../shared/services';

export class MenuBrandIcon extends React.Component {
  render() {
    return (
      <a href="#" className="navbar-brand" title={i18n.current.menu.title}>
        BiP
      </a>
    );
  }
}
