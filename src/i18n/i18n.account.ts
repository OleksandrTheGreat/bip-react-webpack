export interface Ii18nAccount {
  editTitle: string;
  createTitle: string;
  constraintErrorMessage: string;
  nameValidationMessage: string;
  currency: string;
}

export class i18nAccountEN implements Ii18nAccount {
  editTitle = 'Edit accout';
  createTitle = 'Create account';
  constraintErrorMessage = 'Account {0} already exists';
  nameValidationMessage = 'Provide account name';
  currency = 'Currency';
}

export class i18nAccountUA implements Ii18nAccount {
  editTitle = 'Редагувати рахунок';
  createTitle = 'Створити рахунок';
  constraintErrorMessage = 'Account {0} already exists';
  nameValidationMessage = 'Вкажіть назву рахунку';
  currency = 'Валюта';
}
