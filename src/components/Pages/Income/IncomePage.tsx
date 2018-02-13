import * as React from 'react';
import { MarkerModel } from "../../../models";
import { FormPage, Form, FormTextField } from "../../common/Form";
import { state } from '../../../shared';
import { Header } from "../../common/Page";
import { SaveMarker } from "../../../bus/commands/marker.commands";
import { GoBack, ShowError } from "../../../bus/commands/index";
import { MarkerCategory } from "../../../domain";

export class IncomePage extends FormPage<MarkerModel> {
  
  constructor(props) {
    super(props);

    this._onSave = this._onSave.bind(this);
  }

  render() {

    let title = this.props.data.id
      ? state.i18n.income.editTitle
      : state.i18n.income.createTitle;

    return (
      <div>
        <Header>
          <i className="fa header-icon fa-plus"></i>
          {title}
        </Header>
        <Form onSave={this._onSave}>
          <FormTextField
            title={state.i18n.common.name}
            value={this.state.data.name}
            isRequired={true}
            validationMessage={state.i18n.income.nameValidationMessage}
            onChange={(e) => this.onChange(income => income.name = e.target.value)}/>
        </Form>
      </div>
    );
  }

  private _onSave() {

    let income = this.state.data;
    income.category = MarkerCategory.Income;

    this._bus.SendAsync(
      new SaveMarker(
        income, 
        () => this._bus.SendAsync(new GoBack()), 
        (error: DOMError) => {

          let message: string;

          switch(error.name) {
            case 'ConstraintError':
              message = state.i18n.income.constraintErrorMessage.replace('{0}', this.state.data.name);
              break;
            default:
              message = state.i18n.common.defaulErrorMessage;
          }

          this._bus.SendAsync(new ShowError(message));
        }));
  }
}