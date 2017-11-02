export interface Ii18nMenu {
  home: string;
  settings: string;
  about: string;
}

export class Ii18nMenuEN implements Ii18nMenu {
  home = "Home";
  settings = "Settings";
  about = "About";
}

export class Ii18nMenuUA implements Ii18nMenu {
  home = "Головна";
  settings = "Налаштування";
  about = "Про";
}
