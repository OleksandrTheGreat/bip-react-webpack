import * as React from 'react';
import * as $ from 'jquery';

import {bus, state, pages} from '../../shared';
import {ChangePage, GoBack} from '../../bus/commands';

import {PageChanged} from '../../bus/events';

export class View extends React.Component < {}, {
  page: any,
  data: any
} > {

  constructor(props) {
    super(props);

    //TODO: remove and add ApplicationStarted event
    let i = state.page.history.length - 1;
    let current: ChangePage = i < 0
      ? null
      : state.page.history[i];

    this.state = 
    {
      page: current === null ? null : current.page,
      data: current === null ? null : current.data
    };

    bus.Handle(PageChanged, (event: PageChanged) => {
      this.setState({page: event.page, data: event.data});
    });
  }

  render() {

    if (this.state.page === null)
      return null;

    const Page = pages[this.state.page];

    return (
      <div className="page container">
        <Page data={this.state.data}/>
      </div>
    );
  }
}
