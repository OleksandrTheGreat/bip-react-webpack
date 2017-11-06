import * as React from 'react';

import {i18n, bus, state} from '../../shared/services';

import {MenuItem} from './MenuItem';
import {ChangePage, ChangeLanguage} from '../../shared/commands';
import {PageChanged} from '../../shared/events';

import {AboutPage, HomePage, SettingsPage} from '../Pages';

export class MenuItemList extends React.Component<
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
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav mr-auto">
          <MenuItem
            title={i18n.current.menu.home}
            onClick={() => {bus.Send(new ChangePage(HomePage))}}
            isActive={this.state.currentPage === HomePage}/>
          <MenuItem
            title={i18n.current.menu.settings}
            onClick={() => {bus.Send(new ChangePage(SettingsPage))}}
            isActive={this.state.currentPage === SettingsPage}/>
          <MenuItem
            title={i18n.current.menu.about}
            onClick={() => {bus.Send(new ChangePage(AboutPage))}}
            isActive={this.state.currentPage === AboutPage}/>
          <MenuItem
            title="EN"
            onClick={() => {bus.Send(new ChangeLanguage(i18n.EN))}}
            isActive={false}/>
          <MenuItem
            title="UA"
            onClick={() => {bus.Send(new ChangeLanguage(i18n.UA))}}
            isActive={false}/>
        </ul>
      </div>
    );
  }
}
