import * as React from 'react';

import {bus, state, pages} from '../../shared';

import {MenuItem} from './MenuItem';

import {ChangePage, ChangeLanguage} from '../../bus/commands';
import {PageChanged} from '../../bus/events';

export class Nav extends React.Component < {}, {currentPage: any} > {
  
  constructor(props) {
    super(props);

    //TODO: remove and add ApplicationStarted event
    let i = state.page.history.length - 1;
    let current: ChangePage = i < 0
      ? null
      : state.page.history[i];

    this.state = {
      currentPage: current === null ? null : current.page
    };

    bus.Handle(PageChanged, (message : PageChanged) => {
      this.setState({currentPage: message.page});
    });
  }

  render() {

    let homeTitle = <span>
      <i className="fa fa-home"></i>
      {state.i18n.menu.home}
    </span>;

    let settingsTitle = <span>
      <i className="fa fa-cogs"></i>
      {state.i18n.menu.settings}
    </span>;

    let aboutTitle = <span>
      <i className="fa fa-info-circle"></i>
      {state.i18n.menu.about}
    </span>;

    return (
      <ul className="navbar-nav mr-auto">
        <MenuItem
          title={homeTitle}
          onClick={() => {
            bus.Send(new ChangePage(pages.HomePage.name))
          }}
          isActive={this.state.currentPage === pages.HomePage.name}/>
        <MenuItem
          title={settingsTitle}
          onClick={() => {
            bus.Send(new ChangePage(pages.SettingsPage.name))
          }}
          isActive={this.state.currentPage === pages.SettingsPage.name}/>
        <MenuItem
          title={aboutTitle}
          onClick={() => {
            bus.Send(new ChangePage(pages.AboutPage.name))
          }}
          isActive={this.state.currentPage === pages.AboutPage.name}/>
      </ul>
    );
  }
}
