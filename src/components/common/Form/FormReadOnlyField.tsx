import * as React from 'react';
import {state} from '../../../shared';

export class FormReadOnlyField extends React.Component < {
  title : string,
  value : string,
} > {
  render() {
    return (
      <div className="row">
        <div className="col va-middle">
          <label>{this.props.title}</label>
        </div>
        <div className="col">
          {this.props.value}
        </div>
      </div>
    );
  }
}
