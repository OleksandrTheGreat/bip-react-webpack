import * as React from 'react';
import {MenuBrandIcon} from './MenuBrandIcon';
import {MenuToggleButton} from './MenuToggleButton';
import {Nav} from './Nav';
import {LanguageBar} from './LanguageBar';
import {IocComponent} from '../common';

export class Menu extends IocComponent<any, any> {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <MenuBrandIcon ioc={this.props.ioc}/>
        <MenuToggleButton/>
        <div className="collapse navbar-collapse" id="navbar">
          <Nav ioc={this.props.ioc}/>
          <LanguageBar ioc={this.props.ioc}/>
        </div>
      </nav>
    );
  }
}
