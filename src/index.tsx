import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {bus, state} from './shared';
import {LanguageChanged} from './bus/events';
import {App} from './components/App/App';

import './bus/handlers/state.handlers';
import './bus/handlers/currency.handlers';
import './bus/handlers/account.handlers';

const render = () => {
  ReactDOM.render(
    <App/>, 
    document.getElementById('root'));
};

//TODO: find better place for this handler
bus.Handle(LanguageChanged, () => {
  render();
});

render();
