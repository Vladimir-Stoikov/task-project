import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddToDo.css';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './AddToDo.valid';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';
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

  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [isImportan, setIsImportan] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [emptyName, setEmptyName] = useState(false);
  const [emptyInfo, setEmptyInfo] = useState(false);

  const { handleSubmit, reset, control, setValue } = useForm<TaskSubmitFormType>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('name', evt.target.value);

  function addTask() {
    if (name.length < 4) {
      setEmptyName(true);
      if (info.length < 6) {
        setEmptyInfo(true);
      }
      return null;
    }
    if (info.length < 6) {
      setEmptyInfo(true);
      return null;
    }

    dispatch(postFetchTask(name, info, isImportan, isComplete));
    reset();
  }

  function backToMain() {
    navigate('/');
  }

  // function clearForm() {
  //   setName('');
  //   setInfo('');
  //   setIsImportan(false);
  //   setIsComplete(false);
  //   setEmptyName(false);
  //   setEmptyInfo(false);
  // }

  return (
    <section className="todo-add-new">
      <h4>Add new ToDo</h4>
      {emptyName ? <p className="wrong">Name field cant be less, than 4</p> : null}
      {emptyInfo ? <p className="wrong">Info field cant be less, than 6</p> : null}
      {/* <TextField
        label="Name"
        placeholder="Enter new Name"
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
      /> */}
      <label>Name11</label>
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
      <TextField
        label="Info"
        placeholder="Enter new Info"
        value={info}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setInfo(event.target.value)}
      />
      <Checkbox label="Its Important?" checked={isImportan} onChange={() => setIsImportan((prev) => !prev)} />
      <Checkbox label="Its Complete?" checked={isComplete} onChange={() => setIsComplete((prev) => !prev)} />
      <button onClick={addTask}>Add</button>
      <button onClick={backToMain}> Back to main</button>
    </section>
  );
}
