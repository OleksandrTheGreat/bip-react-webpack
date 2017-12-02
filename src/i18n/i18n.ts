import { Ii18nMenu, i18nMenuEN, i18nMenuUA } from './i18n.menu';
import { Ii18nSettings, i18nSettingsEN, i18nSettingsUA } from './i18n.settings';
import { Ii18nCurrencyList, i18nCurrencyListEN, i18nCurrencyListUA } from './i18n.currency.list';
import { Ii18nAccountsList, i18nAccountsListEN, i18nAccountsListUA } from './i18n.accounts.list';
import { Ii18nCommon, i18nCommonEN, i18nCommonUA } from './i18n.common';
import { Ii18nCurrency, i18nCurrencyEN, i18nCurrencyUA } from './i18n.currency';

export interface Ii18n {
  locale: string;
  menu: Ii18nMenu;
  settings: Ii18nSettings;
  currencyList: Ii18nCurrencyList;
  accountsList: Ii18nAccountsList;
  common: Ii18nCommon;
  currency: Ii18nCurrency;
}

export class i18nEN implements Ii18n {
  locale = 'en-US';
  menu = new i18nMenuEN();
  settings = new i18nSettingsEN();
  currencyList = new i18nCurrencyListEN();
  accountsList = new i18nAccountsListEN();
  common = new i18nCommonEN();
  currency = new i18nCurrencyEN();
}

export class i18nUA implements Ii18n {
  locale = 'uk-UA';
  menu = new i18nMenuUA();
  settings = new i18nSettingsUA();
  currencyList = new i18nCurrencyListUA();
  accountsList = new i18nAccountsListUA();
  common = new i18nCommonUA();
  currency = new i18nCurrencyUA();
}

export const i18n = {
  EN: new i18nEN(),
  UA: new i18nUA()
};
