export interface Ii18nCurrency {
  precision: string;
  editTitle: string;
  createTitle: string;
}

export class i18nCurrencyEN implements Ii18nCurrency {
  precision = 'Minimum fraction digits';
  editTitle = 'Edit currency';
  createTitle = 'Create currency';
}

export class i18nCurrencyUA implements Ii18nCurrency {
  precision = 'К-сть знаків після крапки';
  editTitle = 'Редагувати валюту';
  createTitle = 'Створити currency';
}
