import * as React from 'react';

import {bus, state} from '../../shared';
import {ChangePage} from '../../shared/commands';

import {HomePage} from './Home/HomePage';
import { PageChanged } from '../../shared/events';

export class View extends React.Component<
{
},
{
  page: any
}> {

  constructor(props){
    super(props);

    this.state = {
      page: HomePage
    };

    bus.Handle(ChangePage, (message: ChangePage) => {

      state.page.previous = state.page.current;
      state.page.current = message.page;
      
      this.setState({
        page: message.page
      });      
    });
  }

  render() {

    const Page = this.state.page;

    bus.SendAsync(new PageChanged(this.state.page));

    return (
      <div className="container">
        <Page/>
      </div>
    );
  }
}
