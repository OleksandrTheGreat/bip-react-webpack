import {ABus} from 'abus';
import {GUID} from 'xtypescript';
import {ioc} from '../../shared';
import { QueryIncomeList, SaveIncome, DeleteMarker, RestoreMarker } from '../commands/marker.commands';
import { IMarkerService } from '../../services/MarkerService';
import { MarkerCategory } from '../../domain/Marker';

(() => {

  let _bus = ioc.resolve<ABus>(ABus);
  let _service = ioc.resolve<IMarkerService>(IMarkerService);

  _bus.Handle(QueryIncomeList, (command: QueryIncomeList) => {

    _service
      .get(MarkerCategory.income)
      .then(list => command.onSuccess(list))
      .catch(e => command.onError(e));
  });

  _bus.Handle(SaveIncome, (command: SaveIncome) => {

    _service
      .save(command.income)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  _bus.Handle(DeleteMarker, (command: DeleteMarker) => {

    _service
      .delete(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  _bus.Handle(RestoreMarker, (command: RestoreMarker) => {

    _service
      .restore(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

})();