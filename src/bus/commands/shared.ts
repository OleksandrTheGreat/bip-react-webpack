import { state, bus } from "../../shared";
import { Ask, GoBack } from "./";

export class SharedCommands {

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
