import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(4, 'Name must be at least 4 characters')
    .max(20, 'Name must not exceed 20 characters'),
  info: Yup.string()
    .required('Info is required')
    .min(4, 'Info must be at least 6 characters')
    .max(40, 'Info must not exceed 40 characters'),
  isImportant: Yup.boolean(),
  isCompleted: Yup.boolean(),
});
