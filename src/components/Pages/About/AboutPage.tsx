import * as React from 'react';
import {state} from '../../../shared';

export class AboutPage extends React.Component {

  render() {    
    return (
      <div className="container-fluid">
        <div><b className="text-danger">B</b>alance</div>
        <div><b className="text-danger">i</b>n</div>
        <div><b className="text-danger">P</b>ocket</div>
        <div className="mt-4">
          {state.i18n.about.description}
        </div>
      </div>
    );
  }
}
