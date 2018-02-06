import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ABus} from 'abus';
import {ioc, state} from './shared';
import {LanguageChanged} from './bus/events';
import {App} from './components/App/App';

import './bus/handlers/state.handlers';
import './bus/handlers/currency.handlers';
import './bus/handlers/account.handlers';

export const renderApp = () => {
  ReactDOM.render(
    <App/>, 
    document.getElementById('root')
  );
};

renderApp();
