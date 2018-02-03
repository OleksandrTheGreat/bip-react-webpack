import * as React from 'react';
import {state} from '../../../shared';
import { FormField } from './FormField';

export class FormTextAreaField extends React.Component < {
  title : string,
  value : string,
  isRequired?: boolean,
  validationMessage?: string,
  onChange? : any,
  className?: string
} > {

  render() {

    const TextArea = this.props.isRequired
      ? <div>
          <textarea
            className="form-control"
            value={this.props.value}
            onChange={this.props.onChange}
            required
          ></textarea>
          <div className="invalid-feedback">
            {this.props.validationMessage 
              ? this.props.validationMessage 
              : state.i18n.common.defaultValidationMessage}
          </div>
        </div>
      : <textarea
          className="form-control"
          value={this.props.value}
          onChange={this.props.onChange}
        ></textarea>;

    return (
      <FormField 
        title={this.props.title}
        className={this.props.className}
      >
        {TextArea}
      </FormField>
    );
  }
}
