export interface Ii18nCommon {
  back: string;
  name: string;
  description: string;
  edit: string;
  open: string;
  confirmation: string;
  goBackQuestion: string;
  yes: string;
  no: string;
  save: string;
  cancel: string;
  error: string;
  ok: string;
  defaultValidationMessage: string;
}

export class i18nCommonEN implements Ii18nCommon {
  back = 'Back';
  name = 'Name';
  description = 'Description';
  edit = 'Edit';
  open = 'Open';
  confirmation = 'Confirmation';
  goBackQuestion = 'Some changes were made on a page. Do You realy want to go back without saving?';
    yes = 'Yes';
  no = 'No';
  save = 'Save';
  cancel = 'Cancel';
  error = 'Error';
  ok = 'OKAY';
  defaultValidationMessage = 'Provide a valid field value.';
}

export class i18nCommonUA implements Ii18nCommon {
  back = 'Назад';
  name = 'Назва';
  description = 'Опис';  
  edit = 'Редагувати';
  open = 'Відкрити';
  confirmation = 'Підтвердження';
  goBackQuestion = 'На сторінці відбулися деякі зміни. Ви впевнені, що хочете перейти на попередню сторінку без збереження?';
  yes = 'Так';
  no = 'Ні';
  save = 'Зберегти';
  cancel = 'Відмінити';
  error = 'Помилка';
  ok = 'Зрозуміло';
  defaultValidationMessage = 'Надайте валідне значення полю.';
}
