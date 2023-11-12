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
      <h5 className="todos-list_title">
        {name} {id}
      </h5>
      <p>{info}</p>
      <Checkbox label="complete" checked={complete} onChange={() => setComplete((prev) => !prev)} />
      <section className="todos-list_buttons-group">
        <button className="todos-list_button" onClick={deleteCurrentTodo}>
          delete
        </button>
        <button className="todos-list_button" onClick={() => navigate(`change/${id}`)}>
          change
        </button>
      </section>
    </li>
  );
}
