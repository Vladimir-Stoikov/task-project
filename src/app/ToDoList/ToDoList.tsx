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
  const [completedSearch, setCompletedSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [importantSearch, setImportantSearch] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    dispatch(getFetchTasks(completedSearch, search, importantSearch));
  }, [render, search, completedSearch, importantSearch]);

  return (
    <section className="todos-section">
      <nav>
        <SearchInput value={search} onChange={(value) => setSearch(value)} onReset={() => setSearch('')} />
        <button onClick={() => setCompletedSearch((prev) => !prev)}>Completed</button>
        <button onClick={() => setImportantSearch((prev) => !prev)}>Important</button>
      </nav>

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
