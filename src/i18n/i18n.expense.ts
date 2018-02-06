export interface Ii18nExpense {
  nameValidationMessage: string;
  createTitle: string;
  editTitle: string;
  constraintErrorMessage: string;
  deleteQuestion: string;
  restoreQuestion: string;
}

export class i18nExpenseEN implements Ii18nExpense {
  nameValidationMessage = 'Provide expense name';
  createTitle = 'Create expense';
  editTitle = 'Edit expense';
  constraintErrorMessage = 'Expense "{0}" already exists.';
  deleteQuestion = 'Are you sure you want to delete "{0}" expense?';
  restoreQuestion = 'Are you sure you want to restore "{0}" expense?';
}

export class i18nExpenseUA implements Ii18nExpense {
  nameValidationMessage = 'Вкажіть назву витрати';
  createTitle = 'Створити витрату';
  editTitle = 'Редагувати витрату';
  constraintErrorMessage = 'Витрата "{0} вже існує."';
  deleteQuestion = 'Ви впевнені, що хочете видалити витрату "{0}"?';
  restoreQuestion = 'Ви впевнені, що хочете відновити витрату "{0}"?';
}
