import * as React from 'react';
import {state} from '../../../shared';
import {Header} from '../../common/Page';
import {Account} from '../../../domain';
import {AccountModel, AccountFormModel} from '../../../models';
import {
  FormPage,
  FormOptionValue,
  FormOptionsField,
  FormStringField,
  Form,
  FormTextField,
  FormTextAreaField,
  FormNumberField
} from '../../common/Form';
import {QueryCurrencyList} from '../../../bus/commands/currency.commands';
import {CurrencyModel} from '../../../models';
import {ShowError, GoBack} from '../../../bus/commands';
import {SaveAccount} from '../../../bus/commands/account.commands';
import {xMath} from 'xtypescript';
import {FormCheckBoxField} from '../../common/Form/FormCheckBoxField';

export class AccountPage extends FormPage <AccountFormModel> {

  constructor(props) {
    super(props);

    this._onSave = this._onSave.bind(this);
    this._refreshCurrencyList();
  }

  render() {

    const title = this.props.data.account.id
      ? state.i18n.account.editTitle
      : state.i18n.account.createTitle;

    const currencyOptionField = this.state.data.account.id == null
      ? <FormOptionsField
          title={state.i18n.account.currency}
          values={this.state.data.currencyList}
          selectedValue={this.state.data.account.currencyId}
          onChange={e => this.onChange(
            model => {
              model.account.currencyId = e.target.value;
              model.account.currencyName = this.state.data.currencyList.filter(x => x.value == e.target.value)[0].display;
            })}
        />
      : <FormTextField
          title={state.i18n.account.currency}
          value={this.props.data.account.currencyName}
          isReadonly={true}
          className={'text-center'}
        />;

    return (
      <div>
        <Header onBack={this.onBack}>
          <i className="fa header-icon fa-money"></i>
          {title}
        </Header>
        <Form onSave={this._onSave} onCancel={this.onCancel}>
          <FormTextField
            title={state.i18n.common.name}
            value={this.state.data.account.name}
            isRequired={true}
            validationMessage={state.i18n.account.nameValidationMessage}
            onChange={e => this.onChange(model => model.account.name = e.target.value)}/> 
            
          {currencyOptionField}

          <FormTextAreaField
            title={state.i18n.common.description}
            value={this.state.data.account.description}
            onChange={e => this.onChange(model => model.account.description = e.target.value)}/>

          <FormNumberField
            title={state.i18n.account.balance}
            value={this.state.data.account.balance}
            onChange={e => this.onChange(model => model.account.balance = xMath.roundTo(e.target.value, model.account.precision))}/>

          <FormNumberField
            title={state.i18n.account.displayOrder}
            value={this.state.data.account.displayOrder}
            min={0}
            onChange={e => this.onChange(model => model.account.displayOrder = Math.round(e.target.value))}/>

          <FormCheckBoxField
            title={state.i18n.account.showOnHomePage}
            value={this.state.data.account.showOnHomePage}
            className='text-center large'
            onChange={e => this.onChange(model => model.account.showOnHomePage = e.target.checked)}/>
        </Form>
      </div>
    );
  }

  private _onSave() {
    this._bus.SendAsync(
      new SaveAccount(
        this.state.data.account, 
        () => this._bus.SendAsync(new GoBack(true)), 
        (error : DOMError) => {

          let message : string;

          switch (error.name) {
            case 'ConstraintError':
              message = state
                .i18n
                .account
                .constraintErrorMessage
                .replace('{0}', this.state.data.account.name)
                .replace('{1}', this.state.data.account.currencyName);
              break;
            case 'CurrencyIsMissing':
              message = state.i18n.account.currencyIsMissingError;
              break;
            default:
              message = state.i18n.common.defaulErrorMessage;
          }

          this._bus.SendAsync(new ShowError(message));
      }));
  }

  private _refreshCurrencyList() {

    this._bus.SendAsync(new QueryCurrencyList((list : CurrencyModel[]) => {

        this.setState((state) => {

          let account = state.data.account;

          if (!account.currencyId) {

            let currency = list[0];

            this.state.data.account.currencyId = currency.id;
            this.state.data.account.currencyName = currency.name;
          }

          return {
            data: {
              ...state.data,
              account: account,
              currencyList: list
                .filter(x => x.isDeleted === false || x.isDeleted === undefined)
                .map(x => new FormOptionValue(x.id, x.name))
            }
          };
        });
      }, 
      error => this._bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage))));
  }
}
