import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {bus, state} from './shared';
import {ChangeLanguage} from './bus/commands';

import {App} from './components/App/App';
import {HomePage} from './components/Pages/index';

const render = () => {
  ReactDOM.render(
    <App/>, 
    document.getElementById('root'));
};

state.page.history.push(HomePage);

bus.Handle(ChangeLanguage, (message : ChangeLanguage) => {
  state.i18n = message.i18n;
  render();
});

render();
