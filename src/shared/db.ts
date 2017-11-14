import {GUID} from 'xtypescript';
import {IDBAdapter} from '../IndexedDB/IDBAdapter';
import {Account, Currency, Marker, Transaction} from '../domain';

let uahId = GUID.New();

let upgradeCurrency = (db : IDBDatabase) => {

  let store = db.createObjectStore('Currency', {keyPath: "id"});

  store.createIndex('name', 'name', {unique: true});

  store.add(new Currency(uahId, 'UAH'));
  store.add(new Currency(GUID.New(), 'USD'));
  store.add(new Currency(GUID.New(), 'EUR'));
};

let upgradeAccount = (db : IDBDatabase) => {

  let store = db.createObjectStore('Account', {keyPath: "id"});

  store.createIndex('name-currency', ['name', 'currencyId'], {unique: true});
  
  store.add(new Account(GUID.New(), 'Wallet', uahId, 0, null, true, 1));
  store.add(new Account(GUID.New(), 'Card', uahId, 0, null, true, 2));
  store.add(new Account(GUID.New(), 'Reserved', uahId, 0, null, true, 3));
  
  store.add(new Account(GUID.New(), 'Expense', uahId));
  store.add(new Account(GUID.New(), 'Income', uahId));
};

export const idbAdapter = new IDBAdapter('BiP2', 1, (db : IDBDatabase) => {
  upgradeCurrency(db);
  upgradeAccount(db);
});

idbAdapter.get();
