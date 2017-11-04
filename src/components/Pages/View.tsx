import * as React from 'react';

import {bus} from '../../shared/services';
import {ChangePage} from '../../shared/commands';

import {HomePage} from './Home/HomePage';

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
      this.setState({
        page: message.page
      });
    });
  }

  render() {
    const Page = this.state.page;

    return (
      <div className="app-view">
        <Page/>
      </div>
    );
  }
}
