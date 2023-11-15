import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './index.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Stack from '@mui/material/Stack';
import { validationSchemaTask } from './ToDo.valid';
import { deleteFetchTask, patchTask } from 'app/actions/actions';
import { TaskPropsType } from 'types/appTypes';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { TaskResponseType } from 'types/apiTypes';

export default function ToDo({ id, name, info, isCompleted, isImportant, reRender }: TaskPropsType) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.task);
  const [disabled, setDisabled] = useState(isCompleted);
  const { reset, control, setValue } = useForm<Partial<TaskResponseType>>({
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
                important
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
                completed
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
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteCurrentTodo()}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SettingsApplicationsIcon />} onClick={() => navigate(`change/${id}`)}>
          Change
        </Button>
      </Stack>
    </li>
  );
}
