import {i18n, Ii18n} from '../i18n/i18n';
import {HomePage} from '../components/Pages';
import {ChangePage} from '../bus/commands';

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
state.page.history.push(new ChangePage(HomePage));

export {
  state
};
