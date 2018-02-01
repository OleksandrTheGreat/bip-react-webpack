import * as React from 'react';
import {state, bus} from '../../../shared';
import {Account, Currency} from '../../../domain';
import {Form, FormTextField, FormOptionValue, FormReadOnly} from '../../common/Form';
import {SaveState, ShowError } from '../../../bus/commands/index';
import {FormOptionsField, FormPage} from '../../common/Form';
import {QueryCurrencyList} from '../../../bus/commands/currency.commands';
import { AccountModel } from '../../../models/AccountModel';

class AccountFormModel {
  account: AccountModel;
  currencyList: FormOptionValue[];
}

export class AccountForm extends FormPage {

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
          selectedValue={this.props.data.account.currencyId} 
          onChange={(e) => this.onChange<AccountFormModel>(model => model.account.currencyId = e.target.value)}/>
      : <FormReadOnly
        title={state.i18n.account.currency}
        value={this.props.data.account.currency}/>;

    return (
      <Form onSave={this._onSave}>
        <FormTextField
          title={state.i18n.common.name}
          value={this.state.data.account.name}
          isRequired={true}
          validationMessage={state.i18n.account.nameValidationMessage}
          onChange={(e) => this.onChange<AccountFormModel>(model => model.account.name = e.target.value)} />
        {currencyOptionField}
      </Form>
    );
  }

  private _onSave() {

  }

  private _refreshCurrencyList(){

    bus.SendAsync(
      new  QueryCurrencyList( 
        (list: Currency[]) => {

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
