import * as React from 'react';
import {MenuItem} from '../MenuItem/MenuItem';
import {i18n} from '../../i18n/i18n';

export class MainMenu extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <MenuItem 
          title={i18n.current.menu.home} 
          onClick={()=>{alert(1)}}
        />
        <MenuItem 
          title={i18n.current.menu.settings} 
          onClick={()=>{alert(2)}}
        />
        <MenuItem 
          title={i18n.current.menu.about} 
          onClick={()=>{alert(3)}}
        />
      </div>
    );
  }
}
