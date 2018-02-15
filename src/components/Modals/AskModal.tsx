import * as React from 'react';
import {ABus} from 'abus';
import {state} from '../../shared';
import {Ask} from '../../bus/commands';
import * as $ from 'jquery';
import { IocComponent } from '../common';

export class AskModal extends IocComponent<{}, {command: Ask} > {

  private _id = "AskModal";

  constructor(props) {
    super(props);

    this.state = {
      data:{
        command: {
          callback: null,
          question: null
        }
      }
    };

    this._onYes = this._onYes.bind(this);
    this._onNo = this._onNo.bind(this);

    this._bus.HandleLatest(Ask, (message : Ask) => {

      this.setState({data: {command: message}});

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
              <h5 className="ask modal-title">
                <i className="fa fa-question-circle"></i>&nbsp; {state.i18n.common.confirmation}
              </h5>
            </div>
            <div className="modal-body">
              <p>{this.state.data.command.question}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this._onYes}>{state.i18n.common.yes}</button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this._onNo}
                data-dismiss="modal">{state.i18n.common.no}</button>
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

  private _answer(answer : boolean) {

    $('#' + this._id).modal('hide');

    if (this.state.data.command.callback !== undefined || this.state.data.command.callback !== null) 
      this.state.data.command.callback(answer);
    }
  }
