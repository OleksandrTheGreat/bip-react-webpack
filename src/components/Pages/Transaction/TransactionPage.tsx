import * as React from 'react';
import {state} from '../../../shared';
import {FormPage, Form, FormOptionValue, FormOptionsField, FormNumberField, FormTextAreaField} from '../../common/Form';
import {TransactionFormModel} from '../../../models/TransactionFormModel';
import {QueryAccountList} from '../../../bus/commands/account.commands';
import {ShowError} from '../../../bus/commands';
import { QueryMarkerList } from '../../../bus/commands/marker.commands';
import { MarkerCategory } from '../../../domain';
import { TransactionModel } from '../../../models/TransactionModel';
import { Header } from '../../common/Page/Header';
import "xtypescript";
import { AccountModel } from '../../../models';

export enum TransactionType {
  FromAccountToAccount = 0,
  Income,
  Expense
}

export class TransactionPage extends FormPage<TransactionFormModel> {

  constructor(props) {
    super(props);

    this.state = {
      data: this.state.data || new TransactionFormModel()
    };

    this._onTransactionTypeChange = this._onTransactionTypeChange.bind(this);
    this._onSave = this._onSave.bind(this);

    this._refreshAccountList();
    this._refreshMarkerList();
  }

  render() {

    if(this.state.data.accountList == null || this.state.data.accountList.length == 0)
      return null;
    if(this.state.data.incomeList == null || this.state.data.incomeList.length == 0)
      return null;

    return (
      <div>
        {this._Header}
        {this._Form}        
      </div>
    );
  }

  private get _Form() {
    return (
      <Form onSave={this._onSave}>
        {this._TransactionTypeField}
        {this._FromAccountField}
        {this._ToAccountField}
        {this._IncomeField}
        {this._ExpenseField}
        {this._SumFromField}
        {this._SumToField}
        {this._RateField}
        {this._DescriptionField}
      </Form>
    );
  }

  private get _Header() {

    const title = this.state.data.transaction.id == null
      ? state.i18n.transaction.createTitle
      : state.i18n.transaction.title;

    return (
      <Header>
        <i className="fa header-icon fa-exchange"></i>
        {title}
      </Header>
    );
  }

  private get _TransactionType(): TransactionType {

    if (this.state.data.transaction.fromAccountId !== null && this.state.data.transaction.toAccountId === null)
      return TransactionType.Expense;
    
    if (this.state.data.transaction.fromAccountId === null && this.state.data.transaction.toAccountId !== null)
      return TransactionType.Income;
    
    return TransactionType.FromAccountToAccount;
  }

  private get _TransactionTypeField() {
    
    const transactionTypeList = [
      new FormOptionValue(TransactionType.FromAccountToAccount, state.i18n.transaction.accountToAccount),
      new FormOptionValue(TransactionType.Income, state.i18n.transaction.income),
      new FormOptionValue(TransactionType.Expense, state.i18n.transaction.expense)
    ];

    return (
      <FormOptionsField 
        title={state.i18n.transaction.type} 
        values={transactionTypeList} 
        selectedValue={this._TransactionType}
        onChange={this._onTransactionTypeChange}
      />
    );
  }

  private get _FromAccountField() {

    //TODO: add condition

    //if (!(this.state.data.transactiontype === TransactionType.FromAccountToAccount || this.state.data.transactiontype === TransactionType.Expense))
    //  return null;

    const accountId = '';
    const options = this.state.data.accountList.map(
      x => new FormOptionValue(x.id, this._AccountFieldOptionDisplay(x)));

    return (
      <FormOptionsField 
        title={state.i18n.transaction.fromAccount} 
        values={options}
        selectedValue={accountId} 
      />
    );
  }

  private get _ToAccountField() {
    
    //TODO: add condition

    //if (!(this.state.data.transactiontype === TransactionType.FromAccountToAccount || this.state.data.transactiontype === TransactionType.Expense))
    //  return null;

    const accountId = '';
    const options = this.state.data.accountList.map(
      x => new FormOptionValue(x.id, this._AccountFieldOptionDisplay(x)));

    return (
      <FormOptionsField 
        title={state.i18n.transaction.fromAccount} 
        values={options}
        selectedValue={accountId} 
      />
    );
  }

  private get _IncomeField() {

    //TODO: add condition

    const options = this.state.data.incomeList.map(
      x => new FormOptionValue(x.id, x.name));

    return (
      <FormOptionsField
        title={state.i18n.transaction.income}
        values={options}
      />
    );
  }

  private get _ExpenseField() {

    //TODO: add condition

    const options = this.state.data.expenseList.map(
      x => new FormOptionValue(x.id, x.name));

    return (
      <FormOptionsField
        title={state.i18n.transaction.expense}
        values={options}
      />
    );
  }

  private get _SumFromField() {

    //TODO: add condition
    
    return (
      <FormNumberField
        title={state.i18n.transaction.sumFrom}
        value={this.state.data.transaction.sumFrom}
      />
    );
  }

  private get _SumToField() {

    //TODO: add condition
    
    return (
      <FormNumberField
        title={state.i18n.transaction.sumTo}
        value={this.state.data.transaction.sumTo}
      />
    );
  }

  private get _RateField() {

    //TODO: add condition
    
    return (
      <FormNumberField
        title={state.i18n.transaction.rate}
        value={this.state.data.transaction.rate}
      />
    );
  }

  private get _DescriptionField() {

    //TODO: add condition
    
    return (
      <FormTextAreaField
        title={state.i18n.transaction.descriction}
        value={this.state.data.transaction.description}
      />
    );
  }

  private _AccountFieldOptionDisplay(account: AccountModel) {
    return (
      account.name + ' ' + account.currencyName
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
  
  private _onTransactionTypeChange(e) {

    let value = Number.parseInt(e.target.value);

    switch(value) {

      case TransactionType.FromAccountToAccount:
        break;

      case TransactionType.Income:
        break;

      case TransactionType.Income:
        break;
   }
  }
}
