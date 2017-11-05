import { ABus } from 'abus';
import { Ii18n, i18nEN, i18nUA } from '../i18n/i18n';

const bus = new ABus();

const i18n = {
  current: <Ii18n>null,
  EN: new i18nEN(),
  UA: new i18nUA()
};

i18n.current = i18n.EN;

const state = {
  page: {
    current: null
  }
};

export {
  bus,
  i18n,
  state
}
