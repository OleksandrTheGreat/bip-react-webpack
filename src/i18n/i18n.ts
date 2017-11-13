import { Ii18nMenu, i18nMenuEN, i18nMenuUA } from './i18n.menu';

export interface Ii18n {
  menu: Ii18nMenu;
}

export class i18nEN implements Ii18n {
  menu = new i18nMenuEN();
}

export class i18nUA implements Ii18n {
  menu = new i18nMenuUA();
}

export const i18n = {
  EN: new i18nEN(),
  UA: new i18nUA()
};
