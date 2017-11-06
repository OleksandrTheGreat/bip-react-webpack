import * as React from 'react';

import {bus, i18n} from '../../shared/services';

import {MenuItem} from './MenuItem';
import {ChangeLanguage} from '../../shared/commands';

import {AboutPage, HomePage, SettingsPage} from '../Pages';

export class LanguageBar extends React.Component {
  render() {
    return (
      <ul className="navbar-nav pull-right">
        <MenuItem
          title="EN"
          onClick={() => {bus.Send(new ChangeLanguage(i18n.EN))}}
          isActive={false}/>
        <MenuItem
          title="UA"
          onClick={() => {bus.Send(new ChangeLanguage(i18n.UA))}}
          isActive={false}/>
      </ul>
    );
  }
}
