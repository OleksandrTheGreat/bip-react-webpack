import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {bus, i18n, state} from './shared/services';
import {ChangeI18n} from './shared/commands';

import {App} from './components/App/App';
import {HomePage} from './components/Pages/index';

state.page.current = HomePage;

const render = () => {
  ReactDOM.render(
    <App/>, 
    document.getElementById('root'));
};

bus.Handle(ChangeI18n, (message : ChangeI18n) => {
  i18n.current = message.lang;
  render();
});

render();
