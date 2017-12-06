import * as React from 'react';
import {state, bus } from '../../shared';
import {Ask} from '../../shared/commands';
import * as $ from 'jquery';

export class AskModal extends React.Component<{}, {command: Ask}> {

  private _id = "#AskModal";

  constructor(props){
    super(props);

    this.state = {
      command: {
        callback: null,
        question: null
      }
    };

    this._onYes = this._onYes.bind(this);
    this._onNo = this._onNo.bind(this);

    bus.Handle(Ask, (message: Ask) => {

      this.setState({
        command: message
      });
      
      $(this._id).modal('show');
    });
  }

  render() {
    return (
      <div id="AskModal" className="modal" tabIndex={-1} role={'dialog'} data-keyboard="false">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <i className="fa fa-question-circle"></i> {state.i18n.common.question}
              </h5>
            </div>
            <div className="modal-body">
              <p>{this.state.command.question}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this._onYes}>{state.i18n.common.yes}</button>
              <button type="button" className="btn btn-secondary" onClick={this._onNo} data-dismiss="modal">{state.i18n.common.no}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private _onYes() {
    this._answer(true);
  }

  private _onNo() {
    this._answer(false);
  }

  private _answer(answer: boolean) {

    $(this._id).modal('hide');

    if (this.state.command.callback !== undefined || this.state.command.callback !== null)
      this.state.command.callback(answer);
  }
}
