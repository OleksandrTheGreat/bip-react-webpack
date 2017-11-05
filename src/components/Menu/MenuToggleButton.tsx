import * as React from 'react';
import { i18n } from '../../shared/services';

export class MenuToggleButton extends React.Component {
  render() {
    return (
      <button 
          type="button" 
          className="navbar-toggler" 
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label={i18n.current.menu.toggleButtonTitle}
          title={i18n.current.menu.toggleButtonTitle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    );
  }
}
