import * as React from 'react';

export class FormTextAreaField extends React.Component < {
  title : string,
  value : string,
  onChange? : any
} > {

  render() {

    return (
      <div className="row">
        <div className="col va-middle">
          <label>{this.props.title}</label>
        </div>
        <div className="col">
          <textarea
            className="form-control"
            value={this.props.value}
            onChange={this.props.onChange}></textarea>
        </div>
      </div>
    );
  }
}
