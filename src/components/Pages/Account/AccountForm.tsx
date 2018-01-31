import * as React from 'react';
import {state, bus} from '../../../shared';
import {Account} from '../../../domain';
import {Form, FormTextField} from '../../common/Form';
import { SaveState } from '../../../bus/commands/index';
import { FormPage } from '../../common/Form/FormPage';
import { FormOptions } from '../../common/Form/FormOptions';

export class AccountForm extends FormPage {

  constructor(props){
    super(props);

    this._onSave = this._onSave.bind(this);
  }

  render() {
    return (
      <Form onSave={this._onSave}>
        <FormTextField
          title={state.i18n.common.name}
          value={this.state.data.name}
          isRequired={true}
          validationMessage={state.i18n.account.nameValidationMessage}
          onChange={(e) => this.onChange('name', e.target.value)}/>
        <FormOptions 
          title={state.i18n.account.currency}
          values = {[]}/>
      </Form>
    );
  }

  private _onSave() {

  }
}
