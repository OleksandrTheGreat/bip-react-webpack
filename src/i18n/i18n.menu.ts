export interface Ii18nMenu {
  home: string;
  settings: string;
  about: string;
}

export class i18nMenuEN implements Ii18nMenu {
  home = "Home";
  settings = "Settings";
  about = "About";
}

export class i18nMenuUA implements Ii18nMenu {
  home = "Головна";
  settings = "Налаштування";
  about = "Про";
}
