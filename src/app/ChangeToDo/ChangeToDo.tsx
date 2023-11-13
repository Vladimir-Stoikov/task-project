import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';
import './ChangeToDo.css';
import { useAppDispatch, useAppSelector } from 'src/hooks/useTyped';
import { getByIdTask, patchTask } from 'app/actions/actionsTasks';
import { checkBoolean } from 'utils/index';

export default function ChangeToDo() {
  const { id } = useParams();
  const { task } = useAppSelector((state) => state.task);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const idNumber = Number(id);

  const [name, setName] = useState<string | undefined>('');
  const [info, setInfo] = useState<string | undefined>('');
  const [isImportant, setIsImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [dataRender, setDataRender] = useState(false);

  useEffect(() => {
    dispatch(getByIdTask(idNumber)).then(() => {
      setDataRender(true);
    });
  }, []);

  useEffect(() => {
    setName(task ? task.name : '');
    setInfo(task ? task.info : '');
    setIsImportant(task ? checkBoolean(task.isImportant) : false);
    setIsCompleted(task ? checkBoolean(task.isCompleted) : false);
  }, [dataRender]);

  function changeTask() {
    dispatch(patchTask(idNumber, name, info, isCompleted, isImportant)).then(() => backToMain());
  }

  function backToMain() {
    navigate('/');
  }

  return (
    <section className="todo-change">
      <h4>Change ToDo №{id}</h4>
      <TextField
        label="Name"
        placeholder={task !== undefined ? task.name : 'Enter new name'}
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
      />
      <TextField
        label="Info"
        placeholder={task !== undefined ? task.info : 'Inter new Info'}
        value={info}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setInfo(event.target.value)}
      />
      <Checkbox
        label="Its Important?"
        checked={isImportant}
        onChange={() => setIsImportant((prev) => !prev)}
        disabled={isCompleted}
      />
      <Checkbox label="Its Completed?" checked={isCompleted} onChange={() => setIsCompleted((prev) => !prev)} />
      <button onClick={changeTask}>Change Task</button>
      <button onClick={backToMain}> Back to main</button>
    </section>
  );
}
