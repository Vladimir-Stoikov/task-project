import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Checkbox } from '..';
import { TodoType } from 'types/appTypes';
import './ToDo.css';
import { useTypeSelector } from 'src/hooks/useTyped';
import { deleteTodo } from 'app/actions/actions';

interface ToDoProps {
  todoParam: TodoType;
  callback?: () => void;
}

export default function ToDo({ todoParam }: ToDoProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { todosList } = useTypeSelector((state) => state.todos);

  function deleteCurrentTodo() {
    const newArr = todosList.filter((item) => item.id !== todoParam.id);

    dispatch(deleteTodo(newArr));
  }

  return (
    <li className="todos-list_todo">
      <h5>{todoParam.name}</h5>
      <p>{todoParam.description}</p>
      <Checkbox label="complete" />
      <button onClick={deleteCurrentTodo}>delete</button>
      <button onClick={() => navigate(`change/${todoParam.id}`)}>Change</button>
    </li>
  );
}
