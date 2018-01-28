import * as React from 'react';
import { GUID } from 'xtypescript';
import { SharedCommands } from '../../../bus/commands/shared';
import {state} from '../../../shared';

export class Form extends React.Component <
{
  onSave: () => void
}
> {

  private _id: string = GUID.New()

  constructor(props){
    super(props);

    this._onSave = this._onSave.bind(this);
  }

  render(){

    return (
      <form id={this._id} noValidate>
        <div className="container-fluid row-list">
          {this.props.children}
        </div>
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
      </form>
    );
  }

  _onSave(): void {

    let form = document.getElementById(this._id);

    if (form == null)
      throw `Form "${this._id}" was not found on a page!`;

    if (form.className.indexOf('was-validated') < 0)
      form.className += ' was-validated';
    
    if(form['checkValidity']())
      this.props.onSave();
  }
}