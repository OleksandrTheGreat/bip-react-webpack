export interface Ii18nSettings {
  accounts: string;
  currency: string;
}

export class i18nSettingsEN implements Ii18nSettings {
  accounts = 'Accounts';
  currency = 'Currency';
}

export class i18nSettingsUA implements Ii18nSettings {
  accounts = 'Рахунки';
  currency = 'Валюта';
}
