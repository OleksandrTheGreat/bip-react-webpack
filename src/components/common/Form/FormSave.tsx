import * as React from 'react';
import {state, bus} from '../../../shared';
import {Ask} from '../../../bus/commands';
import {SharedCommands} from '../../../bus/commands/shared';

export class FormSave extends React.Component < {
  formId?: string,
  onSave : () => void
} > {

  constructor(props){
    super(props);

    this._onSave = this._onSave.bind(this);
  }

  render() {
    return (
      <div className="container-fluid row-list text-right">
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
          type="submit" 
          className="btn btn-primary"
          onClick={this._onSave}
          title={state.i18n.common.save}
        >
          <i className="fa fa-save"></i>
        </button>
      </div>
    );
  }

  _onSave(): void {

    if (!this.props.formId)
      this.props.onSave();

    let form = document.getElementById(this.props.formId);

    if (form == null)
      throw `Form "${this.props.formId}" was not found on a page!`;

    if (form.className.indexOf('was-validated') < 0)
      form.className += ' was-validated';
    
    if(form['checkValidity']())
      this.props.onSave();
  }
}
