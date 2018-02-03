import * as React from 'react';
import { FormField } from './FormField';

export class FormReadOnlyField extends React.Component < {
  title : string,
  value : string
} > {
  render() {
    return (
      <FormField 
        title={this.props.title}
        className='text-right'
      >
        {this.props.value}
      </FormField>
    );
  }
}
