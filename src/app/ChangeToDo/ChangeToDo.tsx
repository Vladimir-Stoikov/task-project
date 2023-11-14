import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { validationSchemaChange } from './ChangeToDo.valid';
import './ChangeToDo.css';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { getByIdTask, patchTask } from 'app/actions/actionsTasks';
import { checkBoolean } from 'utils/index';
import { TaskResponseType } from 'types/apiTypes';

const defaultValues: Partial<TaskResponseType> = {
  name: '',
  info: '',
  isImportant: false,
  isCompleted: false,
};

export default function ChangeToDo() {
  const { id } = useParams();
  const idNumber = Number(id);

  const { task } = useAppSelector((state) => state.task);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  const { handleSubmit, reset, control, setValue } = useForm<Partial<TaskResponseType>>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchemaChange),
  });

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('name', evt.target.value);
  const onInfoChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('info', evt.target.value);
  const onImportantChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('isImportant', evt.target.checked);
  const onCompletedChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue('isCompleted', evt.target.checked);
    setDisabled(evt.target.checked);
  };

  const onSubmit = (data: Partial<TaskResponseType>) => {
    dispatch(patchTask(idNumber, data));
  };

  function backToMain() {
    navigate('/tasks');
  }

  useEffect(() => {
    dispatch(getByIdTask(idNumber));
  }, []);

  useEffect(() => {
    reset(task);
    setDisabled(task ? checkBoolean(task.isCompleted) : false);
  }, [task]);

  return (
    <section className="task-window">
      <h4>Change ToDo №{id}</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="task-window_form">
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
                disabled={disabled}
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
