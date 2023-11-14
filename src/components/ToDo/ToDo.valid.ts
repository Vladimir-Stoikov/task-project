import * as Yup from 'yup';

export const validationSchemaTask = Yup.object().shape({
  isImportant: Yup.boolean(),
  isCompleted: Yup.boolean(),
});
