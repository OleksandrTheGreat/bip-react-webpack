import * as React from 'react';
import {state} from '../../../shared';
import {Header} from '../../common/Page/Header';
import {Account} from '../../../domain';
import {AccountForm, AccountFormModel} from './AccountForm';
import {AccountModel} from '../../../models/AccountModel';

export class AccountPage extends React.Component < {
  data : {
    account: AccountModel
  }
} > {

  render() {

    let title = this.props.data.account.id
      ? state.i18n.account.editTitle
      : state.i18n.account.createTitle;

    return (
      <div>
        <Header>
          <i className="fa header-icon fa-money"></i>
          {title}
        </Header>
        <AccountForm data={new AccountFormModel(this.props.data.account, [])} />
      </div>
    );
  }
}
