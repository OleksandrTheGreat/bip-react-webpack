import {Currency} from '../../domain/Currency';
import {bus, state, ioc} from '../../shared';
import {QueryCurrencyList, DeleteCurrency, SaveCurrency, RestoreCurrency} from '../commands/currency.commands';
import {GUID} from 'xtypescript';
import {CurrencyModel} from '../../models';

(() => {

  let service = ioc.ICurrencyService.resolve();

  bus.Handle(QueryCurrencyList, (command: QueryCurrencyList) => {

    service
      .getAll()
      .then(list => command.onSuccess(list))
      .catch(e => command.onError(e));
  });

  bus.Handle(SaveCurrency, (command: SaveCurrency) => {

    service
      .save(command.currency)
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
