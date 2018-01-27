import * as React from 'react';

import {bus, i18n} from '../../shared';

import {MenuItem} from './MenuItem';
import {LanguageItem} from './LanguageItem';
import {ChangeLanguage} from '../../bus/commands';

export class LanguageBar extends React.Component {

  constructor(props) {
    super(props);

    this._switchToEN = this._switchToEN.bind(this);
    this._switchToUA = this._switchToUA.bind(this);
  }

  render() {

    const en = <img src={require("../../images/gb.gif")}/>;
    const ua = <img src={require("../../images/ua.gif")}/>;

    return (
      <div className="pull-right">
        <LanguageItem 
          onClick={this._switchToEN}
          title={en}
        />
        <LanguageItem 
          onClick={this._switchToUA}
          title={ua}
        />
      </div>
    );
  }

  private _switchToEN() {
    bus.Send(new ChangeLanguage(i18n.EN));
  }

  private _switchToUA() {
    bus.Send(new ChangeLanguage(i18n.UA));
  }
}
