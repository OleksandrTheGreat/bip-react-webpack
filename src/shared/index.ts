import {ABus} from 'abus';
import {i18n} from '../i18n/i18n';
import {ioc} from './ioc';

const bus = new ABus();

const state = {
  page: {
    current: null,
    previous: null
  },
  i18n: i18n.EN
};

export {
  bus,
  i18n,
  state,
  ioc
}
