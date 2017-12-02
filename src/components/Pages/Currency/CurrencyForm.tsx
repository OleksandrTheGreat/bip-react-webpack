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

    this._onChange = this._onChange.bind(this);
  }

  render() {

    return (
      <div className="container-fluid row-list">
        <FormTextField 
          title={state.i18n.common.name} 
          value={this.state.currency.name}
          onChange={(e) => this._onChange('name', e.target.value)}
        />
        <FormTextAreaField
          title={state.i18n.common.description}
          value={this.state.currency.description}
          onChange={(e) => this._onChange('description', e.target.value)}
        />
        <FormNumberField
          title={state.i18n.currency.precision}
          value={this.state.currency.precision}
          onChange={(e) => this._onChange('precision', e.target.value)}
        />
      </div>
    );
  }

  private _onChange(
    name: string,
    value: any
  ) {

    let currency = this.state.currency;
    currency[name] = value;

    this.setState({
      currency: currency
    });
  }
}
