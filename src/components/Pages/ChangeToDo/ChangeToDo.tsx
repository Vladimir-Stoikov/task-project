import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';

import './ChangeToDo.css';

export default function ChangeToDo() {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <section className="todo-change">
      <h4>Change ToDo №{id}</h4>
      <TextField label="Name" />
      <TextField label="Description" />
      <Checkbox label="Its Important?" />
      <button>ChangeToDo</button>
      <button onClick={() => navigate('/')}> Back to main</button>
    </section>
  );
}
