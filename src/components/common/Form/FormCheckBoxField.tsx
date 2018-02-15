import * as React from 'react';
import { FormField } from './FormField';

export class FormCheckBoxField extends React.Component < {
  title : string,
  value : boolean,
  onChange? : any,
  className?: string
} > {
  render() {

    const Input = <input type="checkbox" onChange={this.props.onChange} />;

    Input.props.checked = this.props.value ? 'checked' : null;

    if (this.props.className)
      Input.props.className = Input.props.className + ' ' + this.props.className;

    return (
      <FormField title={this.props.title} className={this.props.className}>
        {Input}
      </FormField>
    );
  }
}
