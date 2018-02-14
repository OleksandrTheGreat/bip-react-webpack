import * as React from 'react';
import { FormField } from './FormField';

export class FormCheckBoxField extends React.Component < {
  title : string,
  value : boolean,
  onChange? : any,
  className?: string
} > {
  render() {

    const Checkbox = <input type="checkbox" onChange={this.props.onChange} />;
    Checkbox.props.checked = this.props.value ? 'checked' : null;

    return (
      <FormField 
        title={this.props.title}
        className={this.props.className}
      >
        {Checkbox}
      </FormField>
    );
  }
}
