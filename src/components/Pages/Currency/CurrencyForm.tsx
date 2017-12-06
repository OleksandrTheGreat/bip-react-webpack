import * as React from 'react';
import {state} from '../../../shared';
import {Currency} from '../../../domain/Currency';
import {FormTextField, FormTextAreaField, FormNumberField} from '../Controls/Form';

export class CurrencyForm extends React.Component <{currency : Currency}, {currency : Currency} > {

  constructor(props){
    super(props);

    this.state = {
      currency: this.props.currency
    };

    this._change = this._change.bind(this);
  }

  render() {

    return (
      <div className="container-fluid row-list">
        <FormTextField 
          title={state.i18n.common.name} 
          value={this.state.currency.name}
          onChange={(e) => this._change('name', e.target.value)}
        />
        <FormTextAreaField
          title={state.i18n.common.description}
          value={this.state.currency.description}
          onChange={(e) => this._change('description', e.target.value)}
        />
        <FormNumberField
          title={state.i18n.currency.precision}
          value={this.state.currency.precision}
          onChange={(e) => this._change('precision', e.target.value)}
          min={0}
          max={3}
        />
      </div>
    );
  }

  private _change(
    name: string,
    value: any
  ) {
    state.page.isDirty = true;

    let currency = this.state.currency;
    currency[name] = value;

    this.setState({
      currency: currency
    });
  }
}
