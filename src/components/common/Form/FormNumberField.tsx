import * as React from 'react';
import {state} from '../../../shared';
import { FormField } from './FormField';

export class FormNumberField extends React.Component < {
  title : string,
  value : number,
  isRequired?: boolean,
  validationMessage?: string,
  onChange? : any,
  min? : number,
  max? : number,
  className?: string
  isReadonly?: boolean
} > {

  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);
  }

  render() {

    const InputValidation = this.props.isRequired
      ? <div className="invalid-feedback">
          {this.props.validationMessage 
            ? this.props.validationMessage 
            : state.i18n.common.defaultValidationMessage}
        </div>
      : null;

    const Input = (
      <input
        type="number"
        className="form-control text-right"
        value={this.props.value}
        onChange={this._onChange}
        min={this.props.min}
        max={this.props.max}
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

  private _onChange(e) {

    let value = e.target.value * 1;

    if (this.props.min !== undefined || this.props.min !== null) {
      if (value < this.props.min) {
        e.target.value = this.props.min;
      }
    }
  
    if (this.props.max !== undefined || this.props.min !== null) {
      if (value > this.props.max) {
        e.target.value = this.props.max;
      }
    }

    if (this.props.onChange)
      this.props.onChange(e);
  }
}
