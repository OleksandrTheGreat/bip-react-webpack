import * as React from 'react';
import {state, bus, pages} from '../../shared';
import {ChangePage} from '../../bus/commands';

export class MenuBrandIcon extends React.Component {
  render() {
    return (
      <a 
        href="#" 
        className="navbar-brand" 
        onClick={() => {
          bus.Send(new ChangePage(pages.HomePage.name))
        }}
        title={state.i18n.menu.title}
      >
        BiP
      </a>
    );
  }
}
