import * as React from 'react';
import { FormField } from './FormField';

export class FormReadOnlyField extends React.Component < {
  title : string,
  value : string,
  className?: string
} > {
  render() {
    return (
      <FormField 
        title={this.props.title}
        className={this.props.className}
      >
        {this.props.value}
      </FormField>
    );
  }
}
