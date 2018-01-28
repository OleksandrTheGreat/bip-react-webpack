export interface Ii18nCurrency {
  precision: string;
  editTitle: string;
  createTitle: string;
  nameValidationMessage: string;
  minimumFractionDigitsValidationMessage: string;
}

export class i18nCurrencyEN implements Ii18nCurrency {
  precision = 'Minimum fraction digits';
  editTitle = 'Edit currency';
  createTitle = 'Create currency';
  nameValidationMessage = 'Provide currency name';
  minimumFractionDigitsValidationMessage = 'Provide minimum fraction digits';
}

export class i18nCurrencyUA implements Ii18nCurrency {
  precision = 'К-сть знаків після крапки';
  editTitle = 'Редагувати валюту';
  createTitle = 'Створити currency';
  nameValidationMessage = 'Вкажіть назву валюти';
  minimumFractionDigitsValidationMessage = 'Вкажіть кількістьсть знаків після крапки';
}
