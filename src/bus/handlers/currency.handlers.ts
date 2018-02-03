import {Currency} from '../../domain/Currency';
import {bus, state, ioc} from '../../shared';
import {QueryCurrencyList, DeleteCurrency, SaveCurrency, UnDeleteCurrency} from '../commands/currency.commands';
import { GUID } from 'xtypescript';
import {CurrencyModel} from '../../models';

(() => {

  const storageName = 'Currency';
  let repository = ioc.IIDBRepository.resolve();

  bus.Handle(QueryCurrencyList, (command: QueryCurrencyList) => {

    repository
      .query<Currency>(storageName)
      .then(list => {

        let result = list
          .sort((a, b) => {
            if(a.name > b.name)
              return 1;
            if(a.name < b.name)
              return -1;
            return 0;
          })
          .map(x => new CurrencyModel(
            x.id,
            x.name,
            x.precision,
            x.description,
            x.isDeleted
          ));

        command.onSuccess(result);
      })
      .catch(e => command.onError(e));
  });

  bus.Handle(SaveCurrency, (command: SaveCurrency) => {

    if (command.currency.id) {

      repository
        .getById<Currency>(storageName, command.currency.id)
        .then(currency => {

          currency.name = command.currency.name;
          currency.precision = command.currency.precision;
          currency.description = command.currency.description;
          currency.modifiedDateTime = new Date();

          repository
            .update<Currency>('Currency', currency)
            .then(() => command.onSuccess())
            .catch(e => command.onError(e));
        })
        .catch(e => command.onError(e));

    } else {

      let currency = new Currency(
        GUID.New(),
        command.currency.name,
        command.currency.precision,
        command.currency.description
      );

      repository
        .update<Currency>('Currency', currency)
        .then(() => command.onSuccess())
        .catch(e => command.onError(e));
    }
  });

  bus.Handle(DeleteCurrency, (command: DeleteCurrency) => {

    repository
        .getById<Currency>(storageName, command.currency.id)
        .then(currency => {

          currency.isDeleted = true;
          currency.modifiedDateTime = new Date();

          repository
            .update<Currency>('Currency', currency)
            .then(() => command.onSuccess())
            .catch(e => command.onError(e));
        })
        .catch(e => command.onError(e));
  });

  bus.Handle(UnDeleteCurrency, (command: UnDeleteCurrency) => {

    repository
        .getById<Currency>(storageName, command.currency.id)
        .then(currency => {

          currency.isDeleted = false;
          currency.modifiedDateTime = new Date();

          repository
            .update<Currency>('Currency', currency)
            .then(() => command.onSuccess())
            .catch(e => command.onError(e));
        })
        .catch(e => command.onError(e));
  });

})();
