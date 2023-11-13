import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { Checkbox } from '..';
import './ToDo.css';
import { useAppDispatch } from 'src/hooks/hooks';
import { deleteFetchTask } from 'app/actions/actionsTasks';
import { TaskPropsType } from 'types/appTypes';

export default function ToDo({ id, name, info, isCompleted, isImportant, reRender }: TaskPropsType) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [complete, setComplete] = useState(isCompleted);
  const [important, setImportant] = useState(isImportant);

  function deleteCurrentTodo() {
    dispatch(deleteFetchTask(id)).then(() => reRender((prev) => !prev));
  }

  return (
    <li className="todos-list_todo">
      <h5 className="todos-list_title">
        {name} #{id}
      </h5>
      <p className="todos-list_info">{info}</p>
      <section className="todos-list_checbox-group">
        <Checkbox label="complete" checked={complete} onChange={() => setComplete((prev) => !prev)} />
        <Checkbox
          label="important"
          checked={important}
          onChange={() => setImportant((prev) => !prev)}
          disabled={complete}
        />
      </section>
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
