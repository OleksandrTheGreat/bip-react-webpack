import * as React from 'react';
import {MarkerModel} from "../../../models";
import {FormPage, Form, FormTextField} from "../../common/Form";
import {state} from '../../../shared';
import {Header} from "../../common/Page";
import {SaveMarker} from "../../../bus/commands/marker.commands";
import {GoBack, ShowError} from "../../../bus/commands/index";
import {MarkerCategory} from "../../../domain";

export class ExpensePage extends FormPage<MarkerModel> {
  
  constructor(props) {
    super(props);

    this._onSave = this._onSave.bind(this);
  }

  render() {

    let title = this.props.data.id
      ? state.i18n.expense.editTitle
      : state.i18n.expense.createTitle;

    return (
      <div>
        <Header onBack={this.onBack}>
          <i className="fa header-icon fa-minus"></i>
          {title}
        </Header>
        <Form onSave={this._onSave} onCancel={this.onCancel}>
          <FormTextField
            title={state.i18n.common.name}
            value={this.state.data.name}
            isRequired={true}
            validationMessage={state.i18n.expense.nameValidationMessage}
            onChange={(e) => this.onChange(expense => expense.name = e.target.value)}/>
        </Form>
      </div>
    );
  }

  private _onSave() {

    let expense = this.state.data;
    expense.category = MarkerCategory.Expense;

    this._bus.SendAsync(
      new SaveMarker(
        expense, 
        () => this._bus.SendAsync(new GoBack(true)), 
        (error: DOMError) => {

          let message: string;

          switch(error.name) {
            case 'ConstraintError':
              message = state.i18n.expense.constraintErrorMessage.replace('{0}', this.state.data.name);
              break;
            default:
              message = state.i18n.common.defaulErrorMessage;
          }

          this._bus.SendAsync(new ShowError(message));
        }));
  }
}
