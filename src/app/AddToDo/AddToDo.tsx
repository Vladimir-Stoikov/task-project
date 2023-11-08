import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddToDo.css';
import { useDispatch } from 'react-redux';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';
import { TodoType } from 'types/appTypes';
import { getNewId } from 'components/utils/utils';
import { addTodo } from 'app/actions/actions';

export default function AddToDo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isImportan, setIsImportan] = useState(false);
  const [emptyName, setEmptyName] = useState(false);

  function addNewTodo() {
    const newTodo: TodoType = {
      id: getNewId(),
      name: name,
      description: description,
      isImportant: isImportan,
      isComplete: false,
    };

    if (name.trim() === '') {
      setEmptyName(true);
      return null;
    } else {
      setEmptyName(false);
    }

    dispatch(addTodo(newTodo));
    backToMain();
  }

  function backToMain() {
    navigate('/');
  }

  return (
    <section className="todo-add-new">
      <h4>Add new ToDo</h4>
      {emptyName ? <p className="wrong">Name field cant be empty</p> : null}
      <TextField
        label="Name"
        placeholder="Enter new Name"
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
      />
      <TextField
        label="Description"
        placeholder="Enter new Description"
        value={description}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
      />
      <Checkbox label="Its Important?" checked={isImportan} onChange={() => setIsImportan((prev) => !prev)} />
      <button onClick={addNewTodo}>Add</button>
      <button onClick={backToMain}> Back to main</button>
    </section>
  );
}
