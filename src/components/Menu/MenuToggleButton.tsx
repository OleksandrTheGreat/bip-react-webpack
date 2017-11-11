import * as React from 'react';
import {state} from '../../shared';

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
          aria-label={state.i18n.menu.toggleButtonTitle}
          title={state.i18n.menu.toggleButtonTitle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    );
  }
}
