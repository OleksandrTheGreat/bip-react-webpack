import * as React from 'react';
import {i18n} from '../../../shared/services';

export class AboutPage extends React.Component {

  render() {
    return (
      <div>{i18n.current.menu.about}</div>
    );
  }
}
