import * as React from 'react';

export class MenuToggleButton extends React.Component {
  render() {
    return (
      <button 
          type="button" 
          className="navbar-toggler" 
          data-togle="collapse"
          data-target="#navbarSupport"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    );
  }
}
