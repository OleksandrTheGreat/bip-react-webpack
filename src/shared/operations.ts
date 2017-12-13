import { state, bus } from "./";
import { Ask, GoBack } from "./commands";

export class Oprerations {

  public static goBack() {
    if (state.page.isDirty)
    {
      bus.SendAsync(new Ask(
        state.i18n.common.goBackQuestion,
        (answer) => {
          if (answer)
            bus.SendAsync(new GoBack());
        }
      ));
      return;
    }

    bus.SendAsync(new GoBack());
  }
}
