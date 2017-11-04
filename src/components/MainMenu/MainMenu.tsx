import * as React from 'react';

import {i18n, bus} from '../../shared/services';
import {ChangePage, ChangeLanguage} from '../../shared/commands';

import {MenuItem} from '../MenuItem/MenuItem';
import {AboutPage, HomePage, SettingsPage} from '../Pages';

export class MainMenu extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <MenuItem 
          title={i18n.current.menu.home} 
          onClick={()=>{bus.Send(new ChangePage(HomePage))}}
        />
        <MenuItem 
          title={i18n.current.menu.settings} 
          onClick={()=>{bus.Send(new ChangePage(SettingsPage))}}
        />
        <MenuItem 
          title={i18n.current.menu.about} 
          onClick={()=>{bus.Send(new ChangePage(AboutPage))}}
        />
        <MenuItem 
          title="EN" 
          onClick={()=>{bus.Send(new ChangeLanguage("EN"))}}
        />
        <MenuItem 
          title="UA" 
          onClick={()=>{bus.Send(new ChangeLanguage("UA"))}}
        />
      </div>
    );
  }
}
