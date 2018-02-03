import * as React from 'react';
import {state, bus} from '../../../shared';
import {Account, Currency} from '../../../domain';
import {Form, FormTextField, FormOptionValue, FormReadOnlyField, FormNumberField} from '../../common/Form';
import {SaveState, ShowError } from '../../../bus/commands';
import {FormOptionsField, FormPage} from '../../common/Form';
import {QueryCurrencyList} from '../../../bus/commands/currency.commands';
import {AccountModel, CurrencyModel} from '../../../models';
import {FormTextAreaField} from '../../common/Form/FormTextAreaField';
import { xMath } from 'xtypescript';

export class AccountFormModel {
  constructor(
    public account: AccountModel,
    public currencyList: FormOptionValue[]
  ) {}
}

export class AccountForm extends FormPage<AccountFormModel> {

  constructor(props){
    super(props);

    this._onSave = this._onSave.bind(this);
    this._refreshCurrencyList();
  }

  render() {

    const currencyOptionField = this.state.data.account.id == null
      ? <FormOptionsField 
          title={state.i18n.account.currency}
          values = {this.state.data.currencyList}
          selectedValue={this.state.data.account.currencyId} 
          onChange={(e) => this.onChange(model => model.account.currencyId = e.target.value)}/>
      : <FormReadOnlyField
          title={state.i18n.account.currency}
          value={this.props.data.account.currency}
          className='text-right' />;

    return (
      <Form onSave={this._onSave}>
        <FormTextField
          title={state.i18n.common.name}
          value={this.state.data.account.name}
          isRequired={true}
          validationMessage={state.i18n.account.nameValidationMessage}
          onChange={e => this.onChange(model => model.account.name = e.target.value)}
        />

        {currencyOptionField}

        <FormTextAreaField
          title={state.i18n.common.description}
          value={this.state.data.account.description}
          onChange={e => this.onChange(model => model.account.description = e.target.value)}
        />
        
        <FormNumberField 
          title={state.i18n.account.balance}
          value={this.state.data.account.balance}
          onChange={e => this.onChange(model => model.account.balance = xMath.roundTo(e.target.value, model.account.precision))}
        />

      </Form>
    );
  }

  private _onSave() {

  }

  private _refreshCurrencyList(){

    bus.SendAsync(
      new  QueryCurrencyList( 
        (list: CurrencyModel[]) => {

          this.setState((state) => {

            return {
              data: {
              ...state.data,
              currencyList: list
                .filter(x => x.isDeleted === false || x.isDeleted === undefined)
                .map(x => new FormOptionValue(x.id, x.name))
              }
            };
          });
        },
        (error) => {
          bus.SendAsync(new ShowError(state.i18n.common.defaulErrorMessage));
        }));
  }
}
