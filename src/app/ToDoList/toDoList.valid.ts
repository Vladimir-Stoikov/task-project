import * as Yup from 'yup';

export const validationSearch = Yup.object().shape({
  search: Yup.string(),
  isImportant: Yup.boolean(),
  isCompleted: Yup.boolean(),
});
