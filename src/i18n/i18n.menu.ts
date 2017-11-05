export interface Ii18nMenu {
  home: string;
  settings: string;
  about: string;
  title: string;
  toggleButtonTitle: string;
}

export class i18nMenuEN implements Ii18nMenu {
  home = 'Home';
  settings = 'Settings';
  about = 'About';
  title = 'Balance in pocket';
  toggleButtonTitle = 'Toggle navigation menu';
}

export class i18nMenuUA implements Ii18nMenu {
  home = 'Головна';
  settings = 'Налаштування';
  about = 'Про';
  title = 'Баланс в кішені';
  toggleButtonTitle = 'Перемкнути меню навігації';
}