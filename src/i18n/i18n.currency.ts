export interface Ii18nCurrency {
  precision: string;
  editTitle: string;
  createTitle: string;
  nameValidationMessage: string;
  minimumFractionDigitsValidationMessage: string;
  deleteQuestion: string;
  constraintErrorMessage: string;
}

export class i18nCurrencyEN implements Ii18nCurrency {
  precision = 'Minimum fraction digits';
  editTitle = 'Edit currency';
  createTitle = 'Create currency';
  nameValidationMessage = 'Provide currency name';
  minimumFractionDigitsValidationMessage = 'Provide minimum fraction digits';
  deleteQuestion = 'Are you sure you want to delete the currency?';
  constraintErrorMessage = 'Currency "{0}" already exists';
}

export class i18nCurrencyUA implements Ii18nCurrency {
  precision = 'К-сть знаків після крапки';
  editTitle = 'Редагувати валюту';
  createTitle = 'Створити валюту';
  nameValidationMessage = 'Вкажіть назву валюти';
  minimumFractionDigitsValidationMessage = 'Вкажіть кількістьсть знаків після крапки';
  deleteQuestion = 'Ви впевнені, що хочете видалити валюту?';
  constraintErrorMessage = 'Валюта "{0}" вже існує.';
}
