import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { bus, i18n } from './shared/services';
import { StartApplication, ChangeLanguage } from './shared/commands';
import { App } from './components/App/App';

const render = () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
};

bus.Handle(StartApplication, render);
bus.Handle(ChangeLanguage, (message: ChangeLanguage)=>{
  i18n.current = i18n[message.name];
  render();
});

bus.SendAsync(new StartApplication());
