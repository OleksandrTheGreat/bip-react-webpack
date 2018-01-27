import * as React from 'react';
import {state, ioc, bus} from '../../../shared';
import {Currency} from '../../../domain/Currency';
import {FormTextField, FormTextAreaField, FormNumberField} from '../../common/Form';
import {FormSave} from '../../common/Form/FormSave';
import {ICurrencyFormService} from '../../../services/CurrencyFormService';
import {GoBack, ShowError} from '../../../bus/commands';

export class CurrencyForm extends React.Component < {
  currency : Currency
}, {currency: Currency} > {

  private _service: ICurrencyFormService;

  constructor(props) {
    super(props);

    this._service = ioc
      .ICurrencyFormService
      .resolve();

    this.state = {
      currency: this.props.currency
    };

    this._change = this._change.bind(this);
    this._onSave = this._onSave.bind(this);
  }

  render() {

    return (
      <div className="container-fluid row-list">
        <FormTextField
          title={state.i18n.common.name}
          value={this.state.currency.name}
          onChange={(e) => this._change('name', e.target.value)}/>
        <FormTextAreaField
          title={state.i18n.common.description}
          value={this.state.currency.description}
          onChange={(e) => this._change('description', e.target.value)}/>
        <FormNumberField
          title={state.i18n.currency.precision}
          value={this.state.currency.precision}
          onChange={(e) => this._change('precision', e.target.value)}
          min={0}
          max={3}/>
        <FormSave onSave={this._onSave}/>
      </div>
    );
  }

  private _change(name : string, value : any) {
    
    state.page.isDirty = true;

    let currency = this.state.currency;
    currency[name] = value;

    this.setState({currency: currency});
  }

  private _onSave() {
    try {
      this
        ._service
        .save(this.state.currency)
        .then(() => {
          bus.SendAsync(new GoBack());
        }, (e) => {
          bus.SendAsync(new ShowError(e));
        });
    } catch (e) {
      bus.SendAsync(new ShowError(e));
    }
  }
}
