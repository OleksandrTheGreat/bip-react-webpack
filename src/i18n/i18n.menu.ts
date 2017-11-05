export interface Ii18nMenu {
  home: string;
  settings: string;
  about: string;
  title: string;
}

export class i18nMenuEN implements Ii18nMenu {
  home = "Home";
  settings = "Settings";
  about = "About";
  title = "Balance in pocket";
}

export class i18nMenuUA implements Ii18nMenu {
  home = "Головна";
  settings = "Налаштування";
  about = "Про";
  title = "Баланс в кішені";
}
