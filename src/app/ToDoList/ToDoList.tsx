import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { SearchInput } from 'components/SearchInput';
import './toDoList.css';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { getFetchTasks } from 'app/actions/actionsTasks';
import type {} from 'redux-thunk/extend-redux';
import ToDo from 'components/ToDo/ToDo';
import { Loader } from 'components/Loader';

export default function ToDoList() {
  const { tasks, loading, error } = useAppSelector((state) => state.task);
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
    <section className="task-section">
      <div className="task-section_loader">
        <Loader isLoading={loading}> </Loader>
      </div>
      <nav className="task-section_nav">
        <SearchInput value={search} onChange={(value) => setSearch(value)} onReset={() => setSearch('')} />
        <button className="btn btn-primary task-section_btn" onClick={() => setCompletedSearch((prev) => !prev)}>
          Completed
        </button>
        <button
          className="btn btn-outline-primary task-section_btn"
          onClick={() => setImportantSearch((prev) => !prev)}>
          Important
        </button>
      </nav>

      <ul className="task-list">
        {tasks.map((task) => (
          <ToDo
            key={nanoid()}
            id={task.id}
            name={task.name}
            info={task.info}
            isCompleted={task.isCompleted}
            isImportant={task.isImportant}
            reRender={setRender}
          />
        ))}
      </ul>
      {error ? <h4>{error}</h4> : null}

      <button className="btn btn-primary" onClick={() => navigate('/tasks/add')}>
        Add todo
      </button>
    </section>
  );
}
