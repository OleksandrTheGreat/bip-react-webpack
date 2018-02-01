import * as React from 'react';
import {state} from '../../../shared';
import {Header} from '../../common/Page/Header';
import {Account} from '../../../domain';
import {AccountForm} from './AccountForm';

export class AccountPage extends React.Component < {
  data : {
    account: Account
  }
} > {

  render() {

    let title = this.props.data.account.id
      ? state.i18n.account.editTitle
      : state.i18n.account.createTitle;

    return (
      <div>
        <Header>
          <i className="fa header-icon fa-usd"></i>
          {title}
        </Header>
        <AccountForm data={{
          account: this.props.data.account,
          currencyList: []
        }} />
      </div>
    );
  }
}
