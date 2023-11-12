import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchInput } from 'components/SearchInput';
import './toDoList.css';
import { useAppDispatch, useTypeSelector } from 'src/hooks/useTyped';
import { getFetchTasks } from 'app/actions/actionsTasks';
import type {} from 'redux-thunk/extend-redux';
import ToDo from 'components/ToDo/ToDo';

export default function ToDoList() {
  const { tasks, loading, error } = useTypeSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [render, setRender] = useState(false);

  useEffect(() => {
    dispatch(getFetchTasks());
  }, [render]);

  return (
    <section className="todos-section">
      <SearchInput value={search} onChange={(value) => setSearch(value)} />
      <ul className="todos-list">
        {tasks.map((todo) => (
          <ToDo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            info={todo.info}
            isCompleted={todo.isCompleted}
            isImportant={todo.isImportant}
            reRender={setRender}
          />
        ))}
      </ul>
      {loading ? <h4>Загрузка</h4> : null}
      {error ? <h4>{error}</h4> : null}

      <button onClick={() => navigate('/todos/add')}>Add todo</button>
    </section>
  );
}
