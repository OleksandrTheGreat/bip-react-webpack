import * as React from 'react';

export class FormOptionValue {
  constructor(
    public value: any,
    public display: string
  ){ }
}

export class FormOptionsField extends React.Component < {
  title : string,
  values : FormOptionValue[],
  selectedValue?: any,
  isRequired?: boolean,
  validationMessage?: string,
  onChange? : any
} > {

  render(){

    const Options = this.props.values.map(x => 
      <option value={x.value} selected={x.value == this.props.selectedValue}>{x.display}</option>);

    const Input = <div>
      <select
        className="form-control"
        onChange={this.props.onChange}
      >
        {Options}
      </select>
    </div>;

    return (
      <div className="row">
        <div className="col va-middle">
          <label>{this.props.title}</label>
        </div>
        <div className="col">
          {Input}
        </div>
      </div>
    );
  }
}
