import { Ii18nMenu, i18nMenuEN, i18nMenuUA } from './i18n.menu';
import { Ii18nSettings, i18nSettingsEN, i18nSettingsUA } from './i18n.settings';
import { Ii18nCurrencyList, i18nCurrencyListEN, i18nCurrencyListUA } from './i18n.currency.list';
import { Ii18nAccountsList, i18nAccountsListEN, i18nAccountsListUA } from './i18n.accounts.list';
import { Ii18nCommon, i18nCommonEN, i18nCommonUA } from './i18n.common';
import { Ii18nCurrency, i18nCurrencyEN, i18nCurrencyUA } from './i18n.currency';
import { Ii18nAccount, i18nAccountEN, i18nAccountUA } from './i18n.account';
import { Ii18nAbout, i18nAboutEN, i18nAboutUA } from './i18n.about';
import { Ii18nTransactions, i18nTransactionsEN, i18nTransactionsUA } from './i18n.transactions';
import { Ii18nIncomeList, i18nIncomeListEN, i18nIncomeListUA } from './i18n.income.list';
import { Ii18nExpenseList, i18nExpenseListEN, i18nExpenseListUA } from './i18n.expense.list';
import { Ii18nIncome, i18nIncomeEN, i18nIncomeUA } from './i18n.income';
import { Ii18nExpense, i18nExpenseEN, i18nExpenseUA } from './i18n.expense';

export interface Ii18n {
  locale: string;
  menu: Ii18nMenu;
  settings: Ii18nSettings;
  currencyList: Ii18nCurrencyList;
  accountsList: Ii18nAccountsList;
  common: Ii18nCommon;
  currency: Ii18nCurrency;
  account: Ii18nAccount;
  about: Ii18nAbout;
  transactions: Ii18nTransactions;
  incomeList: Ii18nIncomeList;
  expenseList: Ii18nExpenseList;
  income: Ii18nIncome;
  expense: Ii18nExpense;
}

export class i18nEN implements Ii18n {
  locale = 'en-US';
  menu = new i18nMenuEN();
  settings = new i18nSettingsEN();
  currencyList = new i18nCurrencyListEN();
  accountsList = new i18nAccountsListEN();
  common = new i18nCommonEN();
  currency = new i18nCurrencyEN();
  account = new i18nAccountEN();
  about = new i18nAboutEN();
  transactions = new i18nTransactionsEN();
  incomeList = new i18nIncomeListEN();
  expenseList = new i18nExpenseListEN();
  income = new i18nIncomeEN();
  expense = new i18nExpenseEN();
}

export class i18nUA implements Ii18n {
  locale = 'uk-UA';
  menu = new i18nMenuUA();
  settings = new i18nSettingsUA();
  currencyList = new i18nCurrencyListUA();
  accountsList = new i18nAccountsListUA();
  common = new i18nCommonUA();
  currency = new i18nCurrencyUA();
  account = new i18nAccountUA();
  about = new i18nAboutUA();
  transactions = new i18nTransactionsUA();
  incomeList = new i18nIncomeListUA();
  expenseList = new i18nExpenseListUA();
  income = new i18nIncomeUA();
  expense = new i18nExpenseUA();
}

export const i18n = {
  EN: new i18nEN(),
  UA: new i18nUA()
};
