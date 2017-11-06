import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {bus, i18n, state} from './shared/services';
import {ChangeLanguage} from './shared/commands';

import {App} from './components/App/App';
import {HomePage} from './components/Pages/index';

state.page.current = HomePage;

const render = () => {
  ReactDOM.render(
    <App/>, 
    document.getElementById('root'));
};

bus.Handle(ChangeLanguage, (message : ChangeLanguage) => {
  i18n.current = message.i18n;
  render();
});

render();
