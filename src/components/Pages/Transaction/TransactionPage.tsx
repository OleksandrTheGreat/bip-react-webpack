import * as React from 'react';
import {state} from '../../../shared';
import {FormPage, Form, FormOptionValue, FormOptionsField} from '../../common/Form';
import {TransactionFormModel, TransactionType} from '../../../models/TransactionFormModel';
import {QueryAccountList} from '../../../bus/commands/account.commands';
import {ShowError} from '../../../bus/commands';
import { QueryMarkerList } from '../../../bus/commands/marker.commands';
import { MarkerCategory } from '../../../domain';
import { TransactionModel } from '../../../models/TransactionModel';
import { Header } from '../../common/Page/Header';

export class TransactionPage extends FormPage<TransactionFormModel> {

  constructor(props) {
    super(props);

    this.state = {
      data: this.state.data || new TransactionFormModel()
    };

    this._onSave = this._onSave.bind(this);

    this._refreshAccountList();
    this._refreshMarkerList();
  }

  render() {

    const title = this.state.data.transaction.id == null
      ? state.i18n.transaction.createTitle
      : state.i18n.transaction.title;

    const transactionTypeList = [
      new FormOptionValue(TransactionType.FromAccountToAccount, state.i18n.transaction.accountToAccount),
      new FormOptionValue(TransactionType.Income, state.i18n.transaction.income),
      new FormOptionValue(TransactionType.Expense, state.i18n.transaction.expense)
    ];

    const fromAccountId =  this.state.data.accountList.length > 0
      ? this.state.data.transaction.fromAccountId || this.state.data.accountList[0]
      : null;

    const toAccountId =  this.state.data.accountList.length > 0
      ? this.state.data.transaction.toAccountId || this.state.data.accountList[0]
      : null;

    const accountListOptions = this.state.data.accountList.map(
      x => new FormOptionValue(x.id, x.name + ' ' + x.currencyName));
    
    const fromAccountField = this.state.data.transactiontype === TransactionType.FromAccountToAccount || this.state.data.transactiontype === TransactionType.Expense
      ? <FormOptionsField 
          title={state.i18n.transaction.fromAccount} 
          values={accountListOptions}
          selectedValue={fromAccountId} />
      : null;
    
    const toAccountField = this.state.data.transactiontype === TransactionType.FromAccountToAccount || this.state.data.transactiontype === TransactionType.Income
      ? <FormOptionsField 
          title={state.i18n.transaction.toAccount} 
          values={accountListOptions}
          selectedValue={toAccountId} />
      : null;

    return (
      <div>
        <Header>
          <i className="fa header-icon fa-exchange"></i>
          {title}
        </Header>
        <Form onSave={this._onSave}>
          <FormOptionsField 
            title={state.i18n.transaction.type} 
            values={transactionTypeList} 
            selectedValue={this.state.data.transactiontype}
          />
          
          {fromAccountField}

          {toAccountField}
        </Form>
      </div>
    );
  }

  private _onSave() {

  }

  private _refreshAccountList() {
    this._bus.SendAsync(new QueryAccountList(
      (accounts) => {
        this.setState((state) => {
          return {
            data: {
              ...state.data,
              accountList: accounts
            }
          }
        });
      },
      error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))
    ));
  }

  private _refreshMarkerList() {
    this._bus.SendAsync(new QueryMarkerList(
      (markers) => {

        let incomeList = markers.filter(x => x.category === MarkerCategory.Income);
        let expenseList = markers.filter(x => x.category === MarkerCategory.Expense);

        this.setState((state) => {
          return {
            data: {
              ...state.data,
              incomeList: incomeList,
              expenseList: expenseList
            }
          }
        });
      },
      error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))
    ));
  }

  
}
