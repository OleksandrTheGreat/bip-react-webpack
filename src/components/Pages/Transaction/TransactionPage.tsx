import * as React from 'react';
import {state} from '../../../shared';
import {FormPage, Form, FormOptionValue, FormOptionsField, FormNumberField, FormTextAreaField} from '../../common/Form';
import {TransactionFormModel} from '../../../models/TransactionFormModel';
import {QueryAccountList} from '../../../bus/commands/account.commands';
import {ShowError} from '../../../bus/commands';
import {QueryMarkerList} from '../../../bus/commands/marker.commands';
import {MarkerCategory} from '../../../domain';
import {TransactionModel} from '../../../models/TransactionModel';
import {Header} from '../../common/Page';
import {AccountModel} from '../../../models';

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

    this._onSave = this._onSave.bind(this);
    this._onTransactionTypeChange = this._onTransactionTypeChange.bind(this);
    this._onFromAccountChange = this._onFromAccountChange.bind(this);
    this._onToAccountChange = this._onToAccountChange.bind(this);

    this._refreshAccountList();
    this._refreshMarkerList();
  }

  render() {

    if(!this._isFormReady())
      return null;

    this._adjustTransaction();

    return (
      <div>
        {this._Header}
        {this._Form}        
      </div>
    );
  }

  private _isFormReady(): boolean {
    return (
         this.state.data.accountList != null
      && this.state.data.incomeList != null
      && this.state.data.expenseList != null
    );
  }
  
  private _adjustTransaction() {

    if(this._TransactionType !== null)
      return;

    if(this.state.data.accountList.length === 0)
      return;

    this.state.data.transaction.fromAccountId = this.state.data.accountList[0].id;

    let toAccountResult = this.state.data.accountList.filter(x => x.id !== this.state.data.transaction.fromAccountId);

    if(toAccountResult.length > 0)
      this.state.data.transaction.toAccountId = toAccountResult[0].id;
  }

  private get _Form() {
    return (
      <Form onSave={this._onSave} onCancel={this.onCancel}>
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
      <Header onBack={this.onBack}>
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
    
    if (this.state.data.transaction.fromAccountId !== null && this.state.data.transaction.toAccountId !== null)
      return TransactionType.FromAccountToAccount;

    return null;
  }

  private get _TransactionTypeField() {
    
    const transactionTypeList = [
      new FormOptionValue(TransactionType.FromAccountToAccount, state.i18n.transaction.accountToAccount),
      new FormOptionValue(TransactionType.Income, state.i18n.transaction.income),
      new FormOptionValue(TransactionType.Expense, state.i18n.transaction.expense)
    ];

    return (
      <FormOptionsField 
        id={'TransactionType'}
        title={state.i18n.transaction.type} 
        values={transactionTypeList} 
        selectedValue={this._TransactionType}
        onChange={this._onTransactionTypeChange}
      />
    );
  }

  private get _FromAccountField() {

    if (!this.state.data.transaction.fromAccountId)
      return null;

    const options = this.state.data.accountList
      .filter(x => x.id != this.state.data.transaction.toAccountId)
      .map(x => new FormOptionValue(x.id, this._AccountFieldOptionDisplay(x)));

    return (
      <FormOptionsField 
        title={state.i18n.transaction.fromAccount} 
        values={options}
        selectedValue={this.state.data.transaction.fromAccountId}
        onChange={this._onFromAccountChange}
      />
    );
  }

  private get _ToAccountField() {
    
    if (!this.state.data.transaction.toAccountId)
      return null;

    const options = this.state.data.accountList
      .filter(x => x.id != this.state.data.transaction.fromAccountId)
      .map(x => new FormOptionValue(x.id, this._AccountFieldOptionDisplay(x)));

    return (
      <FormOptionsField 
        title={state.i18n.transaction.toAccount} 
        values={options}
        selectedValue={this.state.data.transaction.toAccountId} 
        onChange={this._onToAccountChange}
      />
    );
  }

  private get _IncomeField() {

    if (!this.state.data.transaction.toAccountId || !this.state.data.transaction.markerId)
      return null;

    const options = this.state.data.incomeList.map(
      x => new FormOptionValue(x.id, x.name));

    return (
      <FormOptionsField
        title={state.i18n.transaction.income}
        values={options}
        selectedValue={this.state.data.transaction.markerId}
      />
    );
  }

  private get _ExpenseField() {

    if (!this.state.data.transaction.fromAccountId || !this.state.data.transaction.markerId)
      return null;

    const options = this.state.data.expenseList.map(
      x => new FormOptionValue(x.id, x.name));

    return (
      <FormOptionsField
        title={state.i18n.transaction.expense}
        values={options}
        selectedValue={this.state.data.transaction.markerId}
      />
    );
  }

  private get _SumFromField() {

    if (!this.state.data.transaction.fromAccountId)
      return null;
    
    return (
      <FormNumberField
        title={state.i18n.transaction.sumFrom}
        value={this.state.data.transaction.sumFrom}
        min={0}
      />
    );
  }

  private get _SumToField() {

    if (!this.state.data.transaction.toAccountId)
      return null;
      
    if(this._isSameAccountsCurrency())
      return null;

    return (
      <FormNumberField
        title={state.i18n.transaction.sumTo}
        value={this.state.data.transaction.sumTo}
        min={0}
      />
    );
  }

  private get _RateField() {

    if (!this.state.data.transaction.fromAccountId || !this.state.data.transaction.toAccountId)
      return null;
    
    if(this._isSameAccountsCurrency())
      return null;

    return (
      <FormNumberField
        title={state.i18n.transaction.rate}
        value={this.state.data.transaction.rate}
        min={0}
        isReadonly={true}
      />
    );
  }

  private get _DescriptionField() {

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
        this.setState(state => {
          return {
            data: {
              ...state.data,
              accountList: accounts.filter(x => !x.isDeleted)
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

        let incomeList = markers.filter(x => x.category === MarkerCategory.Income && !x.isDeleted);
        let expenseList = markers.filter(x => x.category === MarkerCategory.Expense && !x.isDeleted);

        this.setState(state => {
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
        this.setState((state: {data: TransactionFormModel}) => {

          let newState = {...state};

          newState.data.transaction.fromAccountId = newState.data.accountList[0].id;
          newState.data.transaction.toAccountId = newState.data.accountList[1].id;
          newState.data.transaction.markerId = null;

          return newState;
        });
        break;

      case TransactionType.Income:
        this.setState((state: {data: TransactionFormModel}) => {

          let newState = {...state};

          newState.data.transaction.fromAccountId = null;
          newState.data.transaction.toAccountId = newState.data.accountList[0].id;
          newState.data.transaction.markerId = newState.data.incomeList[0].id;

          return newState;
        });
        break;

      case TransactionType.Expense:
        this.setState((state: {data: TransactionFormModel}) => {

          let newState = {...state};

          newState.data.transaction.fromAccountId = newState.data.accountList[0].id;
          newState.data.transaction.toAccountId = null;
          newState.data.transaction.markerId = newState.data.expenseList[0].id;

          return newState;
        });
        break;
   }
  }

  private _onFromAccountChange(e) {

    let value = e.target.value

    this.setState((state: {data: TransactionFormModel}) => {

      let newState = {...state};

      newState.data.transaction.fromAccountId = value;

      return newState;
    });
  }

  private _onToAccountChange(e) {
    
    let value = e.target.value

    this.setState((state: {data: TransactionFormModel}) => {

      let newState = {...state};

      newState.data.transaction.toAccountId = value;

      return newState;
    });
  }

  private _isSameAccountsCurrency(): boolean {

    if (!this.state.data.accountList)
      return false;

    let fromAccountResult = this.state.data.accountList.filter(x => x.id === this.state.data.transaction.fromAccountId);
    let toAccountResult = this.state.data.accountList.filter(x => x.id === this.state.data.transaction.toAccountId);

    if (fromAccountResult.length === 0 || toAccountResult.length === 0)
      return false;
    
    let fromAccount = fromAccountResult[0];
    let toAccount = toAccountResult[0];

    return fromAccount.currencyId === toAccount.currencyId;
  }
}
