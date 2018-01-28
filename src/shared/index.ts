import {bus} from './bus';
import {i18n} from '../i18n/i18n';
import {state} from './state';
import {ioc} from './ioc';
import {pages} from './pages';

import '../bus/handlers/state.handlers';
import '../bus/handlers/currency.handlers';

export {
  bus,
  i18n,
  state,
  ioc,
  pages
}
