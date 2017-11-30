import * as React from 'react';
import {state} from '../../../shared';
import {Header} from '../Header';

export class AccountsListPage extends React.Component {

  render() {
    return (
      <div>
        <Header>
          <i className="fa header-icon fa-money"></i> {state.i18n.accountsList.title}
        </Header>
      </div>
    );
  }
}
