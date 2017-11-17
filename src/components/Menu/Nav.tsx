import * as React from 'react';

import {bus, state} from '../../shared';

import {MenuItem} from './MenuItem';

import {ChangePage, ChangeLanguage} from '../../shared/commands';
import {PageChanged} from '../../shared/events';

import {AboutPage, HomePage, SettingsPage} from '../Pages';

export class Nav extends React.Component<
{},
{
  currentPage: any
}
> {
  constructor(props){
    super(props);

    this.state = {
      currentPage: state.page.current
    };

    bus.Handle(PageChanged, (message: PageChanged) => {
      this.setState({
        currentPage: message.page
      });
    });
  }

  render() {

    let homeTitle = <span>
      <i className="fa fa-home"></i> {state.i18n.menu.home}
    </span>

    let settingsTitle = <span>
      <i className="fa fa-cogs"></i> {state.i18n.menu.settings}
    </span>

    let aboutTitle = <span>
      <i className="fa fa-info-circle"></i> {state.i18n.menu.about}
    </span>

    return (
      <ul className="navbar-nav mr-auto">
        <MenuItem
          title={homeTitle}
          onClick={() => {bus.Send(new ChangePage(HomePage))}}
          isActive={this.state.currentPage === HomePage}/>
        <MenuItem
          title={settingsTitle}
          onClick={() => {bus.Send(new ChangePage(SettingsPage))}}
          isActive={this.state.currentPage === SettingsPage}/>
        <MenuItem
          title={aboutTitle}
          onClick={() => {bus.Send(new ChangePage(AboutPage))}}
          isActive={this.state.currentPage === AboutPage}/>
      </ul>
    );
  }
}