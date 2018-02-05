import {Currency} from '../../domain/Currency';
import {bus, state, ioc} from '../../shared';
import {QueryCurrencyList, DeleteCurrency, SaveCurrency, RestoreCurrency} from '../commands/currency.commands';
import {GUID} from 'xtypescript';
import {CurrencyModel} from '../../models';

(() => {

  const storageName = 'Currency';
  let repository = ioc.IIDBRepository.resolve();
  let service = ioc.ICurrencyService.resolve();

  bus.Handle(QueryCurrencyList, (command: QueryCurrencyList) => {

    service
      .getAll()
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

    service
      .save(new Currency(
        command.currency.id,
        command.currency.name,
        command.currency.precision,
        command.currency.description
      ))
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  bus.Handle(DeleteCurrency, (command: DeleteCurrency) => {

    service
      .delete(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  bus.Handle(RestoreCurrency, (command: RestoreCurrency) => {

    service
      .restore(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

})();
