import {i18n} from '../i18n/i18n';
import {HomePage} from '../components/Pages';
import {ChangePage} from '../bus/commands';

const state = {
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
