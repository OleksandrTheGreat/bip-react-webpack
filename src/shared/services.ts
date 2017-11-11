import { ABus } from 'abus';
import { Ii18n, i18nEN, i18nUA } from '../i18n/i18n';

const bus = new ABus();

const i18n = {
  EN: new i18nEN(),
  UA: new i18nUA()
};

const state = {
  page: {
    current: null
  },
  i18n: i18n.EN
};

export {
  bus,
  i18n,
  state
}
