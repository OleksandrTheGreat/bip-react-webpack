import { Ii18nMenu, Ii18nMenuEN, Ii18nMenuUA } from './i18n.menu';

export interface Ii18n {
  menu: Ii18nMenu
}

export class Ii18nEN implements Ii18n {
  menu = new Ii18nMenuEN();
}

export class Ii18nUA implements Ii18n {
  menu = new Ii18nMenuUA();
}

export const i18nEN = new Ii18nEN();
export const i18nUA = new Ii18nUA();

export const i18n = {
  current: i18nEN
};
