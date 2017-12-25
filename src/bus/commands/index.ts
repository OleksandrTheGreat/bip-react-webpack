import { Ii18n } from '../../i18n/i18n';

export class ChangePage {
  constructor(
    public page : any,
    public data: any = null
  ) {}
}

export class GoBack {
}

export class ChangeLanguage {
  constructor(public i18n : Ii18n) {}
}

export class Ask {
  constructor(
    public question: string,
    public callback: (answer: boolean) => void
  ){}
}

export class ShowError {
  constructor(
    public error: string
  ){}
}