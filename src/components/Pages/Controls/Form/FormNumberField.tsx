import * as React from 'react';

export class FormNumberField extends React.Component < {
  title : string,
  value : number,
  onChange
    ?
    : any,
  min?: number,
  max?: number
} > {

  constructor(props) {
    super(props);

    this._onChange = this
      ._onChange
      .bind(this);
  }

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
            onChange={this._onChange}
            min={this.props.min}
            max={this.props.max}/>
        </div>
      </div>
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

    if (this.props.onChange !== (undefined || null)) {
      this.props.onChange(e);
    }
  }
}
