import * as React from 'react';

import {MenuBrandIcon} from './MenuBrandIcon';
import {MenuToggleButton} from './MenuToggleButton';
import {Nav} from './Nav';
import {LanguageBar} from './LanguageBar';

export class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <MenuBrandIcon/>
        <MenuToggleButton/>
        <div className="collapse navbar-collapse" id="navbar">
          <Nav />
          <LanguageBar />
        </div>
      </nav>
    );
  }
}
