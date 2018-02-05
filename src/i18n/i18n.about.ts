export interface Ii18nAbout {
  description: string;
}

export class i18nAboutEN implements Ii18nAbout {
  description = 'A simple accountant tool to store and manage home/personal accounts. App is using IndexedDb as a content storage. What means that your data stays in your browser. Any network data transmissions are missing.';  
}

export class i18nAboutUA implements Ii18nAbout {
  description = 'BiP - баланс в кішені. Це простий бухгалтерський інструмент для ведення домашніх/персональниих рахунків. У якості сховища даних додаток використовує IndexedDB. Що означає, що всі дані залишаються у Вашому браузері. Будь які передачі мережею відсутні.';  
}
