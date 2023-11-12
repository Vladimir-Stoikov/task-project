import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';
import './ChangeToDo.css';
import { useTypeSelector } from 'src/hooks/useTyped';
import { TodoType } from 'types/appTypes';
import { changeTodo } from 'app/actions/actions';

export default function ChangeToDo() {
  const { id } = useParams();
  const { todosList } = useTypeSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emptyTodo: TodoType = {
    id: 'none',
    name: 'empty',
    description: 'empty',
    isImportant: false,
    isComplete: false,
  };

  const [currentTodo, setCurrentTodo] = useState<TodoType>(emptyTodo);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isImportant, setIsImportant] = useState(currentTodo.isImportant);
  const [emptyName, setEmptyName] = useState(false);

  useEffect(() => {
    todosList.forEach((item) => {
      if (item.id == id) {
        setCurrentTodo(item);
      }
    });
  }, []);

  function returnChangedTodos() {
    const todoWithChange: TodoType = {
      id: currentTodo.id,
      name: name,
      description: description,
      isImportant: isImportant,
      isComplete: false,
    };

    const newArr = todosList.map((item) => {
      if (item.id == todoWithChange.id) return (item = todoWithChange);
      return item;
    });

    if (name.trim() === '') {
      setEmptyName(true);
      return null;
    } else {
      setEmptyName(false);
    }

    dispatch(changeTodo(newArr));
    backToMain();
  }

  function backToMain() {
    navigate('/');
  }

  return (
    <section className="todo-change">
      <h4>Change ToDo №{id}</h4>
      {emptyName ? <p className="wrong">Name field cant be empty</p> : null}
      <TextField
        label="Name"
        placeholder={currentTodo.name}
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
      />
      <TextField
        label="Description"
        placeholder={currentTodo.description}
        value={description}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
      />
      <Checkbox label="Its Important?" checked={isImportant} onChange={() => setIsImportant((prev) => !prev)} />
      <button onClick={returnChangedTodos}>ChangeToDo</button>
      <button onClick={backToMain}> Back to main</button>
    </section>
  );
}
