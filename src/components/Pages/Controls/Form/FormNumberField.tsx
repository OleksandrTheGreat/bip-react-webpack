import * as React from 'react';

export class FormNumberField extends React.Component < {
  title : string,
  value : number,
  onChange : any
} > {

  render() {

    return (
      <div className="row">
        <div className="col va-middle">
          <label>{this.props.title}</label>
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control text-right"
            value={this.props.value}
            onChange={this.props.onChange}/>
        </div>
      </div>
    );
  }
}
