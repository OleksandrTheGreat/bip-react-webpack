import * as React from 'react';
import {state, bus} from '../../shared';
import {ShowError} from '../../commands';
import * as $ from 'jquery';

export class ErrorModal extends React.Component < {}, {error: string} > {

  private _id = "ErrorModal";

  constructor(props) {
    super(props);

    this.state = {
      error: null
    };

    bus.Handle(ShowError, (message : ShowError) => {

      this.setState({error: message.error});

      $('#' + this._id).modal('show');
    });
  }

  render() {
    return (
      <div
        id={this._id}
        className="modal"
        tabIndex={-1}
        role={'dialog'}
        data-keyboard="false">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="error modal-title">
                <i className="fa fa-exclamation-triangle"></i>&nbsp; {state.i18n.common.error}
              </h5>
            </div>
            <div className="modal-body">
              <p>{this.state.error}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">{state.i18n.common.ok}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
