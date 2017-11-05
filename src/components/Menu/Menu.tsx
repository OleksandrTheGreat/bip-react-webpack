import * as React from 'react';

import {MenuBrandIcon} from './MenuBrandIcon';
import {MenuToggleButton} from './MenuToggleButton';
import {MenuItemList} from './MenuItemList';

export class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <MenuBrandIcon/>
        <MenuToggleButton/>
        <MenuItemList />        
      </nav>
    );
  }
}
