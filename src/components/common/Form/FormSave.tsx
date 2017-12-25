import * as React from 'react';
import {state, bus} from '../../../shared';
import {Ask} from '../../../commands';
import {Oprerations} from '../../../shared/operations';

export class FormSave extends React.Component < {
  onSave : () => void
} > {
  render() {
    return (
      <div className="text-right">
        <button 
          type="button"
          className="btn"
          onClick={Oprerations.goBack}
        >
          <i className="fa fa-cancel">{state.i18n.common.cancel}</i>
        </button>
        &nbsp;
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={this.props.onSave}
        >
          <i className="fa fa-cancel">{state.i18n.common.save}</i>
        </button>
      </div>
    );
  }
}
