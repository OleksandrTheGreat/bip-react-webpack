import {GUID} from 'xtypescript';
import {IDBAdapter, IIDBAdapter} from 'xIndexedDB';
import {Account, Currency, Marker, Transaction, MarkerCategory} from '../domain';

let 
  uahId = GUID.New(),

  upgradeCurrency = (db : IDBDatabase) => {

    let storeName = 'Currency';

    try {
      if (db.version === 2)
        db.deleteObjectStore(storeName);
    }
    catch(ex)
    {
      console.log(ex);
    }

    try {

      let store = db.createObjectStore(storeName, {keyPath: "id"});
      store.createIndex('name', 'name', {unique: true});

      store.add(new Currency(uahId, 'UAH', 2, 'Ukrainian Hryvnia'));
      store.add(new Currency(GUID.New(), 'USD', 2, 'US Dollar'));
      store.add(new Currency(GUID.New(), 'EUR', 2, 'Euro'));
    }
    catch(ex)
    {
      console.log(ex);
    }
  },

  upgradeAccount = (db : IDBDatabase) => {

    let storeName = 'Account';

    try {
      if (db.version === 2)
        db.deleteObjectStore(storeName);
    }
    catch(ex)
    {
      console.log(ex);
    }

    try {
      let store = db.createObjectStore(storeName, {keyPath: "id"});
      store.createIndex('name-currency', ['name', 'currencyId'], {unique: true});
      
      store.add(new Account(GUID.New(), 'Wallet / Гаманець', uahId, 0, null, true, 1));
      store.add(new Account(GUID.New(), 'Card / Картка', uahId, 0, null, true, 2));
      store.add(new Account(GUID.New(), 'Reserved / Резерв', uahId, 0, null, true, 3));
    }
    catch(ex)
    {
      console.log(ex);
    }
  },

  upgradeTransaction = (db : IDBDatabase) => {

    try {
      let store = db.createObjectStore('Transaction', {keyPath: "id"});
    }
    catch(ex)
    {
      console.log(ex);
    }
  },
  
  upgradeMarker = (db : IDBDatabase) => {

    let storeName = 'Marker';

    try {
      if (db.version === 2)
        db.deleteObjectStore(storeName);
    }
    catch(ex)
    {
      console.log(ex);
    }
    
    try {
      let store = db.createObjectStore(storeName, {keyPath: "id"});
      store.createIndex('name-category', ['name', 'category'], {unique: true});

      store.add(new Marker(GUID.New(), MarkerCategory.income, 'Salary / Зарплата'));
      store.add(new Marker(GUID.New(), MarkerCategory.expense, 'Food / Їжа'));
      store.add(new Marker(GUID.New(), MarkerCategory.expense, 'Clothes / Одяг'));
      store.add(new Marker(GUID.New(), MarkerCategory.expense, 'House / Дім'));
      store.add(new Marker(GUID.New(), MarkerCategory.expense, 'Medicine / Медицина'));
      store.add(new Marker(GUID.New(), MarkerCategory.expense, 'Transport / Транстпорт'));
      store.add(new Marker(GUID.New(), MarkerCategory.expense, 'Entertainment / Розваги'));
    }
    catch(ex)
    {
      console.log(ex);
    }
  };

export const idbAdapter: IIDBAdapter = new IDBAdapter(
  'BiP2', 
  2,
  (db : IDBDatabase) => {
    upgradeCurrency(db);
    upgradeAccount(db);
    upgradeTransaction(db);
    upgradeMarker(db);
  }
);

idbAdapter.get();
