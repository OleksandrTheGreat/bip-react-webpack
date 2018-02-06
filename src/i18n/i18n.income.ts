export interface Ii18nIncome {
  nameValidationMessage: string;
  createTitle: string;
  editTitle: string;
  constraintErrorMessage: string;
  deleteQuestion: string;
  restoreQuestion: string;
}

export class i18nIncomeEN implements Ii18nIncome {
  nameValidationMessage = 'Provide income name';
  createTitle = 'Create income';
  editTitle = 'Edit income';
  constraintErrorMessage = 'Income "{0}" already exists.';
  deleteQuestion = 'Are you sure you want to delete "{0}" income?';
  restoreQuestion = 'Are you sure you want to restore "{0}" income?';
}

export class i18nIncomeUA implements Ii18nIncome {
  nameValidationMessage = 'Вкажіть назву доходу';
  createTitle = 'Створити дохід';
  editTitle = 'Редагувати дохід';
  constraintErrorMessage = 'Дохід "{0} вже існує."';
  deleteQuestion = 'Ви впевнені, що хочете видалити дохід "{0}"?';
  restoreQuestion = 'Ви впевнені, що хочете відновити дохід "{0}"?';
}
