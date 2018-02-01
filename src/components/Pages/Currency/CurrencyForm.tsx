import * as React from 'react';
import {state, ioc, bus} from '../../../shared';
import {Currency} from '../../../domain/Currency';
import {FormTextField, FormTextAreaField, FormNumberField, Form, FormPage} from '../../common/Form';
import {GoBack, ShowError, SaveState} from '../../../bus/commands';
import {SaveCurrency} from '../../../bus/commands/currency.commands';

export class CurrencyForm extends FormPage {

  constructor(props) {
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
          validationMessage={state.i18n.currency.nameValidationMessage}
          onChange={(e) => this.onChange<Currency>(currency => currency.name = e.target.value)}/>
        <FormTextAreaField
          title={state.i18n.common.description}
          value={this.state.data.description}
          onChange={(e) => this.onChange<Currency>(currency => currency.description = e.target.value)}/>
        <FormNumberField
          title={state.i18n.currency.precision}
          value={this.state.data.precision}
          isRequired={true}
          validationMessage={state.i18n.currency.minimumFractionDigitsValidationMessage}
          onChange={(e) => this.onChange<Currency>(currency => currency.precision = e.target.value)}
          min={0}
          max={3}/>
      </Form>
    );
  }

  private _onSave() {
    bus.SendAsync(
      new SaveCurrency(
        this.state.data, 
        () => {
          bus.SendAsync(new GoBack());
        }, 
        (error: DOMError) => {

          let message: string;

          switch(error.name) {
            case 'ConstraintError':
              message = state.i18n.currency.constraintErrorMessage.replace('{0}', this.state.data.name);
              break;
            default:
              message = state.i18n.common.defaulErrorMessage;
          }

          bus.SendAsync(new ShowError(message));
        }));
  }
}
