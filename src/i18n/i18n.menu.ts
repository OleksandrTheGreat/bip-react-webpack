export interface Ii18nMenu {
  home: string;
  settings: string;
  about: string;
  title: string;
  toggleButtonTitle: string;
  transactions: string;
}

export class i18nMenuEN implements Ii18nMenu {
  home = 'Home';
  settings = 'Settings';
  about = 'About';
  title = 'Balance in pocket';
  toggleButtonTitle = 'Toggle navigation menu';
  transactions = 'Transactions';
}

export class i18nMenuUA implements Ii18nMenu {
  home = 'Головна';
  settings = 'Налаштування';
  about = 'Про';
  title = 'Баланс в кішені';
  toggleButtonTitle = 'Перемкнути меню навігації';
  transactions = 'Операції';
}
