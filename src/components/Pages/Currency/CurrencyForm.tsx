import * as React from 'react';
import {state} from '../../../shared';
import {Currency} from '../../../domain/Currency';
import { FormTextField, FormTextAreaField, FormNumberField } from '../Controls/Form';

export class CurrencyForm extends React.Component<{currency: Currency}> {

  render() {

    return (
      <div className="container-fluid row-list">
        <FormTextField title={state.i18n.common.name} value={this.props.currency.name}/>
        <FormTextAreaField title={state.i18n.common.description} value={this.props.currency.description}/>
        <FormNumberField title={state.i18n.common.precision} value={this.props.currency.precision}/>
      </div>
    );
  }
}
