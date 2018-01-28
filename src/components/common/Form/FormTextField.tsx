import * as React from 'react';
import {state} from '../../../shared';

export class FormTextField extends React.Component < {
  title : string,
  value : string,
  isRequired?: boolean,
  validationMessage?: string,
  onChange? : any
} > {

  render() {

    const Input = this.props.isRequired
    ? <div>
        <input 
          type="text" 
          className="form-control" 
          value={this.props.value} 
          onChange={this.props.onChange} 
          required />
        <div className="invalid-feedback">
            {this.props.validationMessage 
              ? this.props.validationMessage 
              : state.i18n.common.defaultValidationMessage}
          </div>
      </div>
    : <input 
        type="text" 
        className="form-control" 
        value={this.props.value} 
        onChange={this.props.onChange} />;

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
