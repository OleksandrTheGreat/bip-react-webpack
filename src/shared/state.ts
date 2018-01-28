import {i18n, Ii18n} from '../i18n/i18n';
import {ChangePage} from '../bus/commands';
import {pages} from './pages';

export interface IPageState {
  history: ChangePage[];
  data: any;
  isDirty: boolean;
}

export interface IApplicationState {
  page: IPageState;
  i18n: Ii18n;
}

let savedState: IApplicationState = null;
let defaultState: IApplicationState = {
  page: {
    history: [],
    data: null,
    isDirty: false
  },
  i18n: i18n.EN
};
defaultState.page.history.push(new ChangePage(pages.HomePage.name));

if (localStorage.state) {
  savedState = JSON.parse(localStorage.state);
}

export const state = savedState === null ? defaultState : savedState;
