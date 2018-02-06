import {Currency} from '../../domain/Currency';
import {bus, state, ioc} from '../../shared';
import {QueryCurrencyList, DeleteCurrency, SaveCurrency, RestoreCurrency} from '../commands/currency.commands';
import {GUID} from 'xtypescript';
import {CurrencyModel} from '../../models';
import {ICurrencyService} from '../../services/CurrencyService';

(() => {

  let _service = ioc.resolve<ICurrencyService>(ICurrencyService);

  bus.Handle(QueryCurrencyList, (command: QueryCurrencyList) => {

    _service
      .getAll()
      .then(list => command.onSuccess(list))
      .catch(e => command.onError(e));
  });

  bus.Handle(SaveCurrency, (command: SaveCurrency) => {

    _service
      .save(command.currency)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  bus.Handle(DeleteCurrency, (command: DeleteCurrency) => {

    _service
      .delete(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  bus.Handle(RestoreCurrency, (command: RestoreCurrency) => {

    _service
      .restore(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

})();
