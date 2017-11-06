import { Ii18n } from "../i18n/i18n";

export class ChangePage {
  constructor(public page : any) {}
}

export class ChangeLanguage {
  constructor(public i18n : Ii18n) {}
}
