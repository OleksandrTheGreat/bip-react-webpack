import * as React from 'react';
import { FormField } from './FormField';

export class FormCheckBoxField extends React.Component < {
  title : string,
  value : boolean,
  onChange? : any,
  className?: string
} > {
  render() {

    const Checkbox = this.props.value
      ? <input type="checkbox" onChange={this.props.onChange} checked/>
      : <input type="checkbox" onChange={this.props.onChange} />

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
