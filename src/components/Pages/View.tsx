import * as React from 'react';

import {bus, state} from '../../shared';
import {ChangePage, GoBack} from '../../shared/commands';

import {HomePage} from './Home/HomePage';
import {PageChanged} from '../../shared/events';

export class View extends React.Component < {}, {
  page: any,
  data: any
} > {

  constructor(props) {
    super(props);

    this.state = {
      page: HomePage,
      data: null
    };

    bus.Handle(ChangePage, (message : ChangePage) => {

      state
        .page
        .history
        .push(message);

      this.setState({page: message.page, data: message.data});
    });

    bus.Handle(GoBack, () => {

      let i = state.page.history
        ? state.page.history.length
        : 0;

      if (i === 0 || i === 1) 
        return;
      
      let prev = state.page.history[i - 2];

      state.page.history = state
        .page
        .history
        .slice(0, i - 1);

      //TODO: possible old entity display
      this.setState({page: prev.page, data: prev.data});
    });
  }

  render() {

    const Page = this.state.page;

    bus.SendAsync(new PageChanged(this.state.page));

    return (
      <div className="page container">
        <Page data={this.state.data}/>
      </div>
    );
  }
}
