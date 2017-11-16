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


    // return (
    //   <div className="pull-right">
    //     <a 
    //       href="#" 
    //       onClick={() => {bus.Send(new ChangeLanguage(i18n.EN))}}
    //       className="nav-link"
    //     >
    //       <img src={require("../../images/gb.gif")}/>
    //     </a>;
    //     <a href="#" onClick={() => {bus.Send(new ChangeLanguage(i18n.UA))}}><img src={require("../../images/ua.gif")}/></a>;
    //   </div>
    // );

    // return (
    //   <ul className="navbar-nav pull-right">
    //     <MenuItem
    //       title={en}
    //       onClick={() => {bus.Send(new ChangeLanguage(i18n.EN))}}
    //       isActive={false}/>
    //     <MenuItem
    //       title={ua}
    //       onClick={() => {bus.Send(new ChangeLanguage(i18n.UA))}}
    //       isActive={false}/>
    //   </ul>
    // );
  }
}
