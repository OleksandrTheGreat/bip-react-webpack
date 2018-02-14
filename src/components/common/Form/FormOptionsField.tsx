import * as React from 'react';
import { FormField } from './FormField';

export class FormOptionValue {
  constructor(
    public value: any,
    public display: any
  ){ }
}

export class FormOptionsField extends React.Component < {
  id?: string,
  title : string,
  values : FormOptionValue[],
  selectedValue?: any,
  isRequired?: boolean,
  validationMessage?: string,
  onChange? : any,
  className?: string
} > {

  render() {

    const Options = this.props.values.map(x => 
      <option value={x.value} selected={x.value == this.props.selectedValue} key={x.value}>{x.display}</option>);

    const Input = this.props.id
      ? <select
          id={this.props.id}
          className="form-control"
          onChange={this.props.onChange}
        >
          {Options}
        </select>
      : <select
          className="form-control"
          onChange={this.props.onChange}
        >
          {Options}
        </select>;

    return (
      <FormField 
        title={this.props.title}
        className={this.props.className}
      >
        {Input}
      </FormField>
    );
  }
}
