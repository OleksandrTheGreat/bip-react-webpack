export interface Ii18nSettings {
  accounts: string;
  currency: string;
  incomes: string;
  expenses: string;
}

export class i18nSettingsEN implements Ii18nSettings {
  accounts = 'Accounts';
  currency = 'Currency';
  incomes = 'Incomes';
  expenses = 'Expenses';
}

export class i18nSettingsUA implements Ii18nSettings {
  accounts = 'Рахунки';
  currency = 'Валюта';
  incomes = 'Доходи';
  expenses = 'Витрати';
}
