import * as React from 'react';
import {state} from '../../../shared';
import { FormField } from './FormField';

export class FormTextField extends React.Component < {
  title : string,
  value : string,
  isRequired?: boolean,
  validationMessage?: string,
  onChange? : any,
  className?: string,
  isReadonly?: boolean
} > {

  render() {

    const InputValidation = this.props.isRequired
      ? <div className="invalid-feedback">
          {this.props.validationMessage 
            ? this.props.validationMessage 
            : state.i18n.common.defaultValidationMessage}
        </div>
      : null;

    const Input =(
        <input 
          type="text" 
          className="form-control" 
          value={this.props.value} 
          onChange={this.props.onChange} 
        />
    );

    Input.props.required = this.props.isRequired ? 'required' : null;
    Input.props.readonly = this.props.isReadonly ? 'readonly' : null;
    
    if (this.props.className)
      Input.props.className = Input.props.className + ' ' + this.props.className;

    return (
      <FormField title={this.props.title} className={this.props.className}>
        {Input}
        {InputValidation}
      </FormField>
    );
  }
}
