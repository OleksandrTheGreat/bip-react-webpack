export interface Ii18nCurrency {
  precision: string;
  editTitle: string;
  createTitle: string;
  nameValidationMessage: string;
  minimumFractionDigitsValidationMessage: string;
  deleteQuestion: string;
  constraintErrorMessage: string;
  restoreQuestion: string;
}

export class i18nCurrencyEN implements Ii18nCurrency {
  precision = 'Minimum fraction digits';
  editTitle = 'Edit currency';
  createTitle = 'Create currency';
  nameValidationMessage = 'Provide currency name';
  minimumFractionDigitsValidationMessage = 'Provide minimum fraction digits';
  deleteQuestion = 'Are you sure you want to delete "{0}" currency?';
  constraintErrorMessage = 'Currency "{0}" already exists';
  restoreQuestion = 'Are you realy want to restore "{0}" currency?';
}

export class i18nCurrencyUA implements Ii18nCurrency {
  precision = 'К-сть знаків після крапки';
  editTitle = 'Редагувати валюту';
  createTitle = 'Створити валюту';
  nameValidationMessage = 'Вкажіть назву валюти';
  minimumFractionDigitsValidationMessage = 'Вкажіть кількістьсть знаків після крапки';
  deleteQuestion = 'Ви впевнені, що хочете видалити валюту "{0}"?';
  constraintErrorMessage = 'Валюта "{0}" вже існує.';
  restoreQuestion = 'Ви впевнені, що хочете відновити валюту "{0}"?';
}
