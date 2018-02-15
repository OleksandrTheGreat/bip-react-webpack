import * as React from 'react';
import {state, pages} from '../../shared';
import {ChangePage, GoBack} from '../../bus/commands';
import {PageChanged} from '../../bus/events';
import {IocComponent} from '../common';

export class View extends IocComponent<{}, {page: any, data: any}> {

  constructor(props) {
    super(props);

    //TODO: remove and add ApplicationStarted event
    let i = state.page.history.length - 1;
    let current: ChangePage = i < 0
      ? null
      : state.page.history[i];

    this.state = {
      data: {
        page: current === null ? null : current.page,
        data: current === null ? null : current.data
      }
    };

    this._bus.Handle(
      PageChanged, 
      (event: PageChanged) => this.setState({
        data: {
          page: event.page, 
          data: event.data
        }}),
      'View.PageChanged'
    );
  }

  render() {

    if (this.state.data.page === null)
      return null;

    const Page = pages[this.state.data.page];

    return (
      <div className="page container">
        <Page 
          ioc={this.props.ioc} 
          data={this.state.data.data} />
      </div>
    );
  }
}
