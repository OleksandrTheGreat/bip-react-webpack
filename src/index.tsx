import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {bus, state} from './shared';

import {ChangeLanguage} from './bus/commands';
import {LanguageChanged} from './bus/events';

import {App} from './components/App/App';


const render = () => {
  ReactDOM.render(
    <App/>, 
    document.getElementById('root'));
};

//TODO: find better place for this handler
bus.Handle(LanguageChanged, (message : ChangeLanguage) => {
  render();
});

render();
