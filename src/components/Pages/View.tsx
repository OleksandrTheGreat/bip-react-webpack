import * as React from 'react';

import {HomePage} from './Home/HomePage';
import {SettingsPage} from './Settings/SettingsPage';

export class View extends React.Component<{},
{
  page: any
}> {

  constructor(props){
    super(props);

    this.state = {
      page: HomePage
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(): void {
    
    this.setState({
      page: SettingsPage
    });    

    console.log(this.state.page)
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
