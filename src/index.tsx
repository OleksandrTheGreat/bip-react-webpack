import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {bus, state} from './shared';

import {LanguageChanged} from './bus/events';

import {App} from './components/App/App';


const render = () => {
  ReactDOM.render(
    <App/>, 
    document.getElementById('root'));
};

//TODO: find better place for this handler
bus.Handle(LanguageChanged, (message : LanguageChanged) => {
  render();
});

render();
