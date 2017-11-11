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
    return (
      <ul className="navbar-nav mr-auto">
        <MenuItem
          title={state.i18n.menu.home}
          onClick={() => {bus.Send(new ChangePage(HomePage))}}
          isActive={this.state.currentPage === HomePage}/>
        <MenuItem
          title={state.i18n.menu.settings}
          onClick={() => {bus.Send(new ChangePage(SettingsPage))}}
          isActive={this.state.currentPage === SettingsPage}/>
        <MenuItem
          title={state.i18n.menu.about}
          onClick={() => {bus.Send(new ChangePage(AboutPage))}}
          isActive={this.state.currentPage === AboutPage}/>
      </ul>
    );
  }
}
