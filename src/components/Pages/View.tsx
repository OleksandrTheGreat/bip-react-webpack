import * as React from 'react';
import * as $ from 'jquery';

import {bus, state} from '../../shared';
import {ChangePage, GoBack} from '../../bus/commands';

import {HomePage} from './Home/HomePage';
import {PageChanged} from '../../bus/events';

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

    bus.Handle(PageChanged, (event: PageChanged) => {
      this.setState({page: event.page, data: event.data});
    });
  }

  render() {

    const Page = this.state.page;

    return (
      <div className="page container">
        <Page data={this.state.data}/>
      </div>
    );
  }
}
