import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { bus, i18n } from './shared/services';
import { StartApplication, ChangeI18n } from './shared/commands';
import { App } from './components/App/App';

const render = () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
};

bus.Handle(ChangeI18n, (message: ChangeI18n)=>{
  i18n.current = message.lang;
  render();
});

render();
