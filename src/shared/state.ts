import {i18n, Ii18n} from '../i18n/i18n';
import {ChangePage} from '../bus/commands';
import {pages} from './pages';

export interface IPageState {
  history: ChangePage[];
  isDirty: boolean;
}

export interface IApplicationState {
  page: IPageState;
  i18n: Ii18n;
}

let state: IApplicationState = {
  page: {
    history: [],
    isDirty: false
  },
  i18n: i18n.EN
};
state.page.history.push(new ChangePage(pages.HomePage.name));

export {
  state
};
