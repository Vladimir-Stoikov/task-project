import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dispatch, SetStateAction, useState } from 'react';
import { Checkbox } from '..';
import './ToDo.css';
import { useAppDispatch, useTypeSelector } from 'src/hooks/useTyped';
// import { deleteTodo } from 'app/actions/actions';
import { TaskType } from 'types/appTypes';
import { deleteFetchTask } from 'app/actions/actionsTasks';

type TaskProps = {
  id: number | undefined;
  name: string | undefined;
  info: string | undefined;
  isCompleted: boolean | undefined;
  isImportant: boolean | undefined;
  reRender: Dispatch<SetStateAction<boolean>>;
};

export default function ToDo({ id, name, info, isCompleted, isImportant, reRender }: TaskProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [complete, setComplete] = useState(isCompleted);
  // const dispatch = useDispatch();
  // const { todosList } = useTypeSelector((state) => state.todos);

  function deleteCurrentTodo() {
    // const newArr = todosList.filter((item) => item.id !== todoParam.id);

    // dispatch(deleteTodo(newArr));

    dispatch(deleteFetchTask(id));
    setTimeout(() => {
      reRender((prev) => !prev);
    }, 1);

    // console.log('Delete todo', id);
  }

  return (
    <li className="todos-list_todo">
      <h5>
        {name} {id}
      </h5>
      <p>{info}</p>
      <Checkbox label="complete" checked={complete} onChange={() => setComplete((prev) => !prev)} />
      <button onClick={deleteCurrentTodo}>delete</button>
      <button onClick={() => navigate(`change/${id}`)}>Change</button>
    </li>
  );
}
