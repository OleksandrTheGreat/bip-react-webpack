import * as React from 'react';

export class FormTextField extends React.Component < {
  title : string,
  value : string,
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
            type="text"
            className="form-control"
            value={this.props.value}
            onChange={this.props.onChange}/>
        </div>
      </div>
    );
  }
}
