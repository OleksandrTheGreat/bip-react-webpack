import * as React from 'react';
import {state, bus} from '../../../shared';
import {Ask} from '../../../bus/commands';
import {SharedCommands} from '../../../bus/commands/shared';

export class FormSave extends React.Component < {
  onSave : () => void
} > {
  render() {
    return (
      <div className="text-right">
        <button 
          type="button"
          className="btn"
          onClick={SharedCommands.goBack}
          title={state.i18n.common.cancel}
        >
          <i className="fa fa-ban"></i>
        </button>
        &nbsp;
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={this.props.onSave}
          title={state.i18n.common.save}
        >
          <i className="fa fa-save"></i>
        </button>
      </div>
    );
  }
}
