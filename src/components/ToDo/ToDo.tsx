import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './ToDo.css';
import { validationSchemaTask } from './ToDo.valid';
import { deleteFetchTask, patchTask } from 'app/actions/actionsTasks';
import { TaskPropsType, TaskSubmitFormType } from 'types/appTypes';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';

export default function ToDo({ id, name, info, isCompleted, isImportant, reRender }: TaskPropsType) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.task);

  const [disabled, setDisabled] = useState(isCompleted);

  const { reset, control, setValue } = useForm<Partial<TaskSubmitFormType>>({
    defaultValues: {
      isImportant: isImportant,
      isCompleted: isCompleted,
    },
    resolver: yupResolver(validationSchemaTask),
  });

  useEffect(() => {
    reset();
  }, [tasks]);

  const onImportantChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue('isImportant', evt.target.checked);
    dispatch(patchTask(id, { isImportant: evt.target.checked })).then(() => reRender((prev) => !prev));
  };
  const onCompletedChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue('isCompleted', evt.target.checked);
    setDisabled(evt.target.checked);
    dispatch(patchTask(id, { isCompleted: evt.target.checked })).then(() => reRender((prev) => !prev));
  };

  function deleteCurrentTodo() {
    dispatch(deleteFetchTask(id)).then(() => reRender((prev) => !prev));
  }

  return (
    <li className="todos-list_todo">
      <h5 className="todos-list_title">
        {name} #{id}
      </h5>
      <p className="todos-list_info">{info}</p>
      <section className="todos-list_checbox-group">
        <Controller
          control={control}
          name="isImportant"
          render={({ field, fieldState: { error } }) => (
            <div className="form-group form-check">
              <label htmlFor="acceptTerms" className="form-check-label">
                important?
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
                completed?
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
      </section>
      <section className="todos-list_buttons-group">
        <button className="todos-list_button" onClick={deleteCurrentTodo}>
          delete
        </button>
        <button className="todos-list_button" onClick={() => navigate(`change/${id}`)}>
          change
        </button>
      </section>
    </li>
  );
}
