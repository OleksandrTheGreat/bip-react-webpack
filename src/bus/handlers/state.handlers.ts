import { bus, state, ioc, pages } from '../../shared';
import { ChangePage, GoBack, ChangeLanguage } from '../commands';
import { PageChanged, LanguageChanged } from '../events';

bus.Handle(ChangePage, (message : ChangePage) => {

  state
    .page
    .history
    .push(message);

  bus.SendAsync(new PageChanged(message.page, message.data));
});

bus.Handle(ChangeLanguage, (message : ChangeLanguage) => {
  
  state.i18n = message.i18n;

  bus.SendAsync(new LanguageChanged());
});

bus.Handle(GoBack, () => {

  let i = state.page.history
    ? state.page.history.length
    : 0;

  if (i === 0 || i === 1) 
    return;
  
  let prev = state.page.history[i - 2];

  state.page.history = state
    .page
    .history
    .slice(0, i - 1);

  state.page.isDirty = false;

  //TODO: possible old entity display
  bus.SendAsync(new PageChanged(prev.page, prev.data));
});

bus.Handle(PageChanged, (event : PageChanged) => {
  ioc.IApplicationStateService.resolve().save(state);
});

bus.Handle(LanguageChanged, (event : LanguageChanged) => {
  ioc.IApplicationStateService.resolve().save(state);
});