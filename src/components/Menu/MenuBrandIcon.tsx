import * as React from 'react';
import {state, pages} from '../../shared';
import {ChangePage} from '../../bus/commands';
import {IocComponent} from '../common';

export class MenuBrandIcon extends IocComponent<any, any> {

  render() {
    return (
      <a 
        href="#" 
        className="navbar-brand" 
        onClick={() => this._bus.Send(new ChangePage(pages.HomePage.name))}
        title={state.i18n.menu.title}
      >
        BiP
      </a>
    );
  }
}
