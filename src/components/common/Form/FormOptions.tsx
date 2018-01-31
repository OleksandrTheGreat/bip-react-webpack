import * as React from 'react';

export class FormOptionValue {
  constructor(
    public value: any,
    public display: string
  ){ }
}

export class FormOptions extends React.Component < {
  title : string,
  values : FormOptionValue[],
  selectedValue?: any,
  isRequired?: boolean,
  validationMessage?: string,
  onChange? : any
} > {

  render(){

    const options = this.props.values.map(x => <option value={x.value}>x.display</option>);

    const Input = <div>
      <select
        className="form-control"
      >
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
