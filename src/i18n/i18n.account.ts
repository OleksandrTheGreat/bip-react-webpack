export interface Ii18nAccount {
  editTitle: string;
  createTitle: string;
  constraintErrorMessage: string;
  nameValidationMessage: string;
  currency: string;
  balance: string;
  displayOrder: string;
  showOnHomePage: string;
  currencyIsMissingError: string;
}

export class i18nAccountEN implements Ii18nAccount {
  editTitle = 'Edit accout';
  createTitle = 'Create account';
  constraintErrorMessage = 'Account "{0} {1}" already exists';
  nameValidationMessage = 'Provide account name';
  currency = 'Currency';
  balance = 'Balance';
  displayOrder = 'Display order';
  showOnHomePage = 'Show on Home Page';
  currencyIsMissingError = 'Cannot save Account. Currency was not set.';
}

export class i18nAccountUA implements Ii18nAccount {
  editTitle = 'Редагувати рахунок';
  createTitle = 'Створити рахунок';
  constraintErrorMessage = 'Рахунок "{0} {1}" вже існує';
  nameValidationMessage = 'Вкажіть назву рахунку';
  currency = 'Валюта';
  balance = 'Залишок';
  displayOrder = 'Порядок показу';
  showOnHomePage = 'Показувати на головній сторінці';
  currencyIsMissingError = 'Збереження неможливе. Валюту не було встановлено.';
}
