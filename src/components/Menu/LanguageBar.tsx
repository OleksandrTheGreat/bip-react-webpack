import * as React from 'react';

import {bus, i18n} from '../../shared/services';

import {MenuItem} from './MenuItem';
import {ChangeLanguage} from '../../shared/commands';

import {AboutPage, HomePage, SettingsPage} from '../Pages';

export class LanguageBar extends React.Component {
  render() {

    const ua = <img src={require("../../images/ua.gif")}/>;
    const en = <img src={require("../../images/gb.gif")}/>;

    return (
      <ul className="navbar-nav pull-right">
        <MenuItem
          title={en}
          onClick={() => {bus.Send(new ChangeLanguage(i18n.EN))}}
          isActive={false}/>
        <MenuItem
          title={ua}
          onClick={() => {bus.Send(new ChangeLanguage(i18n.UA))}}
          isActive={false}/>
      </ul>
    );
  }
}
