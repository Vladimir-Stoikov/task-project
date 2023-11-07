import { useNavigate, Link } from 'react-router-dom';
import { Checkbox } from '..';
import { TodoType } from 'types/appTypes';
import './ToDo.css';

interface ToDoProps {
  todoParam: TodoType;
}

export default function ToDo({ todoParam }: ToDoProps) {
  const navigate = useNavigate();

  return (
    <li className="todos-list_todo">
      <h5>{todoParam.name}</h5>
      <p>{todoParam.description}</p>
      <Checkbox label="complete" />
      <button onClick={() => navigate(`change/11`)}>Change</button>
    </li>
  );
}
