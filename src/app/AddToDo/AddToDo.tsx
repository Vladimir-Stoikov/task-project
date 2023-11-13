import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddToDo.css';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';
import { useAppDispatch } from 'src/hooks/useTyped';
import { postFetchTask } from 'app/actions/actionsTasks';

export default function AddToDo() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [isImportan, setIsImportan] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [emptyName, setEmptyName] = useState(false);
  const [emptyInfo, setEmptyInfo] = useState(false);

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
    clearForm();
  }

  function backToMain() {
    navigate('/');
  }

  function clearForm() {
    setName('');
    setInfo('');
    setIsImportan(false);
    setIsComplete(false);
    setEmptyName(false);
    setEmptyInfo(false);
  }

  return (
    <section className="todo-add-new">
      <h4>Add new ToDo</h4>
      {emptyName ? <p className="wrong">Name field cant be less, than 4</p> : null}
      {emptyInfo ? <p className="wrong">Info field cant be less, than 6</p> : null}
      <TextField
        label="Name"
        placeholder="Enter new Name"
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
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
