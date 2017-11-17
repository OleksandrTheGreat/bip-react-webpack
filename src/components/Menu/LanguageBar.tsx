import * as React from 'react';

import {bus, i18n} from '../../shared';

import {MenuItem} from './MenuItem';
import {LanguageItem} from './LanguageItem';
import {ChangeLanguage} from '../../shared/commands';

import {AboutPage, HomePage, SettingsPage} from '../Pages';

export class LanguageBar extends React.Component {

  render() {

    const en = <img src={require("../../images/gb.gif")}/>;
    const ua = <img src={require("../../images/ua.gif")}/>;

    return (
      <div className="pull-right">
        <LanguageItem 
          onClick={() => {bus.Send(new ChangeLanguage(i18n.EN))}}
          title={en}
        />
        <LanguageItem 
          onClick={() => {bus.Send(new ChangeLanguage(i18n.UA))}}
          title={ua}
        />
      </div>
    );
  }
}
