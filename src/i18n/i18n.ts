import { Ii18nMenu, i18nMenuEN, i18nMenuUA } from './i18n.menu';
import { Ii18nSettings, i18nSettingsEN, i18nSettingsUA } from './i18n.settings';

export interface Ii18n {
  menu: Ii18nMenu;
  settings: Ii18nSettings;
}

export class i18nEN implements Ii18n {
  menu = new i18nMenuEN();
  settings = new i18nSettingsEN();
}

export class i18nUA implements Ii18n {
  menu = new i18nMenuUA();
  settings = new i18nSettingsUA();
}

export const i18n = {
  EN: new i18nEN(),
  UA: new i18nUA()
};
