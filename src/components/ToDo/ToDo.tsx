import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Checkbox } from '..';
import './ToDo.css';
import { useTypeSelector } from 'src/hooks/useTyped';
// import { deleteTodo } from 'app/actions/actions';
import { GetTaskType } from 'types/apiTypes';

export default function ToDo({ todoParam }: GetTaskType) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { todosList } = useTypeSelector((state) => state.todos);

  function deleteCurrentTodo() {
    // const newArr = todosList.filter((item) => item.id !== todoParam.id);

    // dispatch(deleteTodo(newArr));
    console.log('Delete todo');
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
