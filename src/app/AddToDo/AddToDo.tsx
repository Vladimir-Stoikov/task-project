import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddToDo.css';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './AddToDo.valid';
import { useAppDispatch } from 'src/hooks/hooks';
import { postFetchTask } from 'app/actions/actionsTasks';
import { TaskSubmitFormType } from 'types/appTypes';

const defaultValues: TaskSubmitFormType = {
  name: '',
  info: '',
  isImportant: false,
  isCompleted: false,
};

export default function AddToDo() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { handleSubmit, reset, control, setValue } = useForm<TaskSubmitFormType>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('name', evt.target.value);
  const onInfoChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('info', evt.target.value);
  const onImportantChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('isImportant', evt.target.checked);
  const onCompletedChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('isCompleted', evt.target.checked);

  const onSubmit = (data: TaskSubmitFormType) => {
    dispatch(postFetchTask(data));
    reset();
  };

  function backToMain() {
    navigate('/');
  }

  return (
    <section className="task-window">
      <h4>Add new ToDo</h4>

      <form className="task-window_form" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <div>
              <input
                value={field.value}
                onChange={onNameChange}
                type="text"
                className={`form-control ${error?.message ? 'is-invalid' : ''}`}
                placeholder="Enter task name"
              />
              <div className="invalid-feedback">{error?.message}</div>
            </div>
          )}
        />
        <label>Info</label>
        <Controller
          control={control}
          name="info"
          render={({ field, fieldState: { error } }) => (
            <div>
              <input
                value={field.value}
                onChange={onInfoChange}
                type="text"
                className={`form-control ${error?.message ? 'is-invalid' : ''}`}
                placeholder="Enter task info"
              />
              <div className="invalid-feedback">{error?.message}</div>
            </div>
          )}
        />
        <Controller
          control={control}
          name="isImportant"
          render={({ field, fieldState: { error } }) => (
            <div className="form-group form-check">
              <label htmlFor="acceptTerms" className="form-check-label">
                Its important?
              </label>
              <input
                checked={field.value}
                onChange={onImportantChange}
                type="checkbox"
                className={`form-check-input ${error?.message ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{error?.message}</div>
            </div>
          )}
        />
        <Controller
          control={control}
          name="isCompleted"
          render={({ field, fieldState: { error } }) => (
            <div className="form-group form-check">
              <label htmlFor="acceptTerms" className="form-check-label">
                Its completed?
              </label>
              <input
                checked={field.value}
                onChange={onCompletedChange}
                type="checkbox"
                className={`form-check-input ${error?.message ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{error?.message}</div>
            </div>
          )}
        />
        <div className="task-window_buttons">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button onClick={backToMain} className="btn btn-outline-primary">
            {' '}
            Back to main
          </button>
        </div>
      </form>
    </section>
  );
}
