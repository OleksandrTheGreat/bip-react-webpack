import * as React from 'react';
import {state} from '../../../shared/services';

export class AboutPage extends React.Component {

  render() {
    return (
      <div>{state.i18n.menu.about}</div>
    );
  }
}
