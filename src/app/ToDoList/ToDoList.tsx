import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import { validationSearch } from './toDoList.valid';
import './index.css';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { getFetchTasks } from 'app/actions/actions';
import ToDo from 'components/ToDo/ToDo';
import { Loader } from 'components/Loader';
import { SearchRequestType } from 'types/apiTypes';

const defaultValues: SearchRequestType = {
  isCompleted: undefined,
  name_like: '',
  isImportant: undefined,
};

export default function ToDoList() {
  const { tasks, loading, error } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [render, setRender] = useState(false);

  const { handleSubmit, control, setValue } = useForm<SearchRequestType>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSearch),
  });

  const onSearchChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('name_like', evt.target.value);

  const onImportantChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('isImportant', evt.target.checked);

  const onCompletedChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('isCompleted', evt.target.checked);

  function onChange(data: SearchRequestType) {
    if (!data.isCompleted) data.isCompleted = undefined;
    if (!data.isImportant) data.isImportant = undefined;
    dispatch(getFetchTasks(data));
  }

  useEffect(() => {
    dispatch(getFetchTasks(defaultValues));
  }, [render]);

  return (
    <section className="task-section">
      <div className="task-section_loader">
        <Loader isLoading={loading}> </Loader>
      </div>
      <form className="task-search-form" onChange={handleSubmit(onChange)}>
        <Controller
          control={control}
          name="name_like"
          render={({ field, fieldState: { error } }) => (
            <div>
              <input
                value={field.value}
                onChange={onSearchChange}
                type="text"
                className="form-control task-search-form_search"
                placeholder="Search"
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
                <ErrorRoundedIcon color="primary" />
              </label>
              <input checked={field.value} onChange={onImportantChange} type="checkbox" className="form-check-input" />
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
                <FactCheckRoundedIcon color="primary" />
              </label>
              <input checked={field.value} onChange={onCompletedChange} type="checkbox" className="form-check-input" />
              <div className="invalid-feedback">{error?.message}</div>
            </div>
          )}
        />
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <ToDo
            key={nanoid()}
            id={task.id}
            name={task.name}
            info={task.info}
            isCompleted={task.isCompleted}
            isImportant={task.isImportant}
            reRender={setRender}
          />
        ))}
      </ul>
      {error ? <h4>{error}</h4> : null}

      <Button color="primary" disabled={false} size="medium" variant="contained" onClick={() => navigate('/tasks/add')}>
        Add Task
      </Button>
    </section>
  );
}
