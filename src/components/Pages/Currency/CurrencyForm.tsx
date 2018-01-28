import * as React from 'react';
import {state, ioc, bus} from '../../../shared';
import {Currency} from '../../../domain/Currency';
import {FormTextField, FormTextAreaField, FormNumberField, Form} from '../../common/Form';
import {GoBack, ShowError, SaveState} from '../../../bus/commands';
import {SaveCurrency} from '../../../bus/commands/currency.commands';

export class CurrencyForm extends React.Component <
{
  currency : Currency
}, 
{
  currency: Currency
} > {

  constructor(props) {
    super(props);

    this.state = {
      currency: state.page.isDirty ? state.page.data : this.props.currency
    };

    this._change = this._change.bind(this);
    this._onSave = this._onSave.bind(this);
  }

  render() {
    return (
      <Form onSave={this._onSave}>
        <FormTextField
          title={state.i18n.common.name}
          value={this.state.currency.name}
          isRequired={true}
          validationMessage={state.i18n.currency.nameValidationMessage}
          onChange={(e) => this._change('name', e.target.value)}/>
        <FormTextAreaField
          title={state.i18n.common.description}
          value={this.state.currency.description}
          onChange={(e) => this._change('description', e.target.value)}/>
        <FormNumberField
          title={state.i18n.currency.precision}
          value={this.state.currency.precision}
          isRequired={true}
          validationMessage={state.i18n.currency.minimumFractionDigitsValidationMessage}
          onChange={(e) => this._change('precision', e.target.value)}
          min={0}
          max={3}/>
      </Form>
    );
  }

  private _change(name : string, value : any) {
    
    state.page.isDirty = true;

    let currency = this.state.currency;
    currency[name] = value;

    state.page.data = currency;
    
    bus.SendAsync(new SaveState());

    this.setState({currency: currency});
  }

  private _onSave() {
    bus.SendAsync(
      new SaveCurrency(
        this.state.currency, 
        () => {
          bus.SendAsync(new GoBack());
        }, 
        (error) => {
          bus.SendAsync(new ShowError(error));
        }));
  }
}
